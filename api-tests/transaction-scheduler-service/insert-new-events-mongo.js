/*
 * This script is intended to be executed in the mongosh of the mongo container during
 * the integration test executed in the code-review-pipelines.
 * The goal of the script is to insert new data in the mongo collection that will
 * be  migrated to the ecommerce-history db.
 * The script accept one argument:
 * - eventList: String
 *              String containing the json array of events to insert in the db,
 *              Must has a length >= 4.
 */

console.log("Insert testing event data in the ecommerce.event-store collection and ecommerce-history.event-store ...")

// Read the testing data as argument of the script
if(!arguments[0]){
    console.log("ERROR: no testing data pass as argument ...");
    quit(1);
}

let eventList = JSON.parse(arguments[0]);

if(eventList.length < 4){
    console.log("ERROR: the lenght of the events list must be equal or greater of 4 ...");
    quit(1);
}

// The service will find only wallet older than 9 months to move in the history db
let notValidDateString = new Date().toISOString();

// Add an event that will not be migrated for testing
let notSelectableEvent = {
    "_id": "a5ded083-5d8d-4771-8215-d01c1346fzz4",
    "transactionId": "zz587724-1078-4f20-b095-ff45793e758b",
    "creationDate": notValidDateString,
    "data": {
      "email": {
        "data": "b282accf-995f-4211-939c-1ba0b4f3f255"
      },
      "paymentNotices": [
        {
          "paymentToken": "3d82a804063f46ed99dfa9e4a235774d",
          "rptId": "77777777777302001250013262570",
          "description": "TARI/TEFA 2021",
          "amount": 1000,
          "isAllCCP": false
        }
      ],
      "clientId": "CHECKOUT",
      "paymentTokenValiditySeconds": 0
    },
    "eventCode": "TRANSACTION_ACTIVATED_EVENT",
    "_class": "it.pagopa.ecommerce.commons.documents.v1.TransactionActivatedEvent"
  }

eventList.push(notSelectableEvent);

// Connect to Mongo DB and insert the new events
dbHistory = db.getSiblingDB("ecommerce-history");
// Copy only the element in position 0 and 1
dbHistory.getCollection('eventstore').insertMany(eventList.slice(0,2))
db = db.getSiblingDB("ecommerce")
// Copy all the event from the position number 1
db.getCollection('eventstore').insertMany(eventList.slice(1))

// Print the eventList generated to use in the testing script
print(JSON.stringify(eventList));