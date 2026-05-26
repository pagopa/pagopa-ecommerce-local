/*
 *  This script is intended to be executed in the mongosh of the mongo container during
 *  the integration test executed in the code-review-pipelines.
 *  To test it in local use this bash script:
 *     #!/bin/bash
 * echo "Starting integration testing of the migration process..."
 *
 * docker cp migration-integration-test.js pagopa-ecommerce-mongo:/tmp/migration-integration-test.js
 *
 * docker exec pagopa-ecommerce-mongo mongosh -u admin -p password --authenticationDatabase admin \
 * --quiet /tmp/migration-integration-test.js
 */
console.log("Insert testing event data in the ecommerce.event-store collection and ecommerce-history.event-store ...")

let eventList = [
  {
    "_id": "a5ded083-5d8d-4771-8215-d01c1346fzz1",
    "transactionId": "075f6031-005c-4927-9a3d-e613d60cafba",
    "creationDate": "2023-03-29T16:44:14.959647218Z[Etc/UTC]",
    "data": {
      "email": {
        "data": "b282accf-995f-4211-939c-1ba0b4f3f255"
      },
      "paymentNotices": [
        {
          "paymentToken": "3d82a804063f46ed99dfa9e4a235774d",
          "rptId": "77777777777302001241098804227",
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
  },
  {
    "_id": "a5ded083-5d8d-4771-8215-d01c1346fzz2",
    "transactionId": "522ab4f9-8d96-4bc7-a028-f0699d1baea2",
    "creationDate": "2023-03-29T16:44:15.020618605Z[Etc/UTC]",
    "data": {
      "email": {
        "data": "b282accf-995f-4211-939c-1ba0b4f3f255"
      },
      "paymentNotices": [
        {
          "paymentToken": "3d82a804063f46ed99dfa9e4a235774d",
          "rptId": "77777777777302001210146638735",
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
  },
  {
    "_id": "a5ded083-5d8d-4771-8215-d01c1346fzz3",
    "transactionId": "da487724-1078-4f20-b095-ff45793e758b",
    "creationDate": "2023-03-29T16:44:15.119048976Z[Etc/UTC]",
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
]

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
let dbHistory = db.getSiblingDB("ecommerce-history");
// Copy only the element in position 0 and 1
dbHistory.getCollection('eventstore').insertMany(eventList.slice(0,2))
let db = db.getSiblingDB("ecommerce")
// Copy all the event from the position number 1
db.getCollection('eventstore').insertMany(eventList.slice(1))

// Create new transaction view for test the migration
console.log("Insert new transaction-view testing data ...");

let transactionViewList =
[
    {
     "_id": "00000000000000000000000000000771",
     "clientId": "CHECKOUT",
     "email": {
       "data": "a4bc4c87-c111-45ca-8b6b-a40a800b4840"
     },
     "status": "AUTHORIZATION_REQUESTED",
     "creationDate": "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
     "paymentNotices": [
       {
         "paymentToken": "b72411c6597140b3946b879ad4c3da2d",
         "rptId": "77777777777302010000655612322",
         "description": "TARI/TEFA 2021",
         "amount": 12000,
         "transferList": [
           {
             "paFiscalCode": "77777777777",
             "digitalStamp": false,
             "transferAmount": 10000,
             "transferCategory": "0101101IM"
           },
           {
             "paFiscalCode": "01199250158",
             "digitalStamp": false,
             "transferAmount": 2000,
             "transferCategory": "0201102IM"
           }
         ],
         "isAllCCP": false,
         "companyName": "company PA",
         "creditorReferenceId": "02010000655612322"
       }
     ],
     "rrn": "250139026637",
     "paymentGateway": "NPG",
     "sendPaymentResultOutcome": "OK",
     "authorizationCode": "105197",
     "authorizationErrorCode": "000",
     "gatewayAuthorizationStatus": "EXECUTED",
     "_class": "it.pagopa.ecommerce.commons.documents.v2.Transaction"
   },
    {
        "_id": "00000000000000000000000000000772",
        "clientId": "CHECKOUT",
        "email": {
          "data": "a4bc4c87-c111-45ca-8b6b-a40a800b4840"
        },
        "status": "AUTHORIZATION_REQUESTED",
        "creationDate": "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        "paymentNotices": [
          {
            "paymentToken": "b72411c6597140b3946b879ad4c3da2d",
            "rptId": "77777777777302010000655612322",
            "description": "TARI/TEFA 2021",
            "amount": 12000,
            "transferList": [
              {
                "paFiscalCode": "77777777777",
                "digitalStamp": false,
                "transferAmount": 10000,
                "transferCategory": "0101101IM"
              },
              {
                "paFiscalCode": "01199250158",
                "digitalStamp": false,
                "transferAmount": 2000,
                "transferCategory": "0201102IM"
              }
            ],
            "isAllCCP": false,
            "companyName": "company PA",
            "creditorReferenceId": "02010000655612322"
          }
        ],
        "rrn": "250139026637",
        "paymentGateway": "NPG",
        "sendPaymentResultOutcome": "OK",
        "authorizationCode": "105197",
        "authorizationErrorCode": "000",
        "gatewayAuthorizationStatus": "EXECUTED",
        "_class": "it.pagopa.ecommerce.commons.documents.v2.Transaction"
      },
    {
           "_id": "00000000000000000000000000000773",
           "clientId": "CHECKOUT",
           "email": {
             "data": "a4bc4c87-c111-45ca-8b6b-a40a800b4840"
           },
           "status": "AUTHORIZATION_REQUESTED",
           "creationDate": "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
           "paymentNotices": [
             {
               "paymentToken": "b72411c6597140b3946b879ad4c3da2d",
               "rptId": "77777777777302010000655612322",
               "description": "TARI/TEFA 2021",
               "amount": 12000,
               "transferList": [
                 {
                   "paFiscalCode": "77777777777",
                   "digitalStamp": false,
                   "transferAmount": 10000,
                   "transferCategory": "0101101IM"
                 },
                 {
                   "paFiscalCode": "01199250158",
                   "digitalStamp": false,
                   "transferAmount": 2000,
                   "transferCategory": "0201102IM"
                 }
               ],
               "isAllCCP": false,
               "companyName": "company PA",
               "creditorReferenceId": "02010000655612322"
             }
           ],
           "rrn": "250139026637",
           "paymentGateway": "NPG",
           "sendPaymentResultOutcome": "OK",
           "authorizationCode": "105197",
           "authorizationErrorCode": "000",
           "gatewayAuthorizationStatus": "EXECUTED",
           "_class": "it.pagopa.ecommerce.commons.documents.v2.Transaction"
         },
    // This view can not be migrate
    {
      "_id": "00000000000000000000000000000774",
      "clientId": "CHECKOUT",
      "email": {
        "data": "a4bc4c87-c111-45ca-8b6b-a40a800b4840"
      },
      "status": "AUTHORIZATION_REQUESTED",
      "creationDate": notValidDateString,
      "paymentNotices": [
        {
          "paymentToken": "b72411c6597140b3946b879ad4c3da2d",
          "rptId": "77777777777302010000655612322",
          "description": "TARI/TEFA 2021",
          "amount": 12000,
          "transferList": [
            {
              "paFiscalCode": "77777777777",
              "digitalStamp": false,
              "transferAmount": 10000,
              "transferCategory": "0101101IM"
            },
            {
              "paFiscalCode": "01199250158",
              "digitalStamp": false,
              "transferAmount": 2000,
              "transferCategory": "0201102IM"
            }
          ],
          "isAllCCP": false,
          "companyName": "company PA",
          "creditorReferenceId": "02010000655612322"
        }
      ],
      "rrn": "250139026637",
      "paymentGateway": "NPG",
      "sendPaymentResultOutcome": "OK",
      "authorizationCode": "105197",
      "authorizationErrorCode": "000",
      "gatewayAuthorizationStatus": "EXECUTED",
      "_class": "it.pagopa.ecommerce.commons.documents.v2.Transaction"
    }
]

// Insert only the view in position 1,2,3
db.getCollection('transactions-view').insertMany(transactionViewList.slice(1))
// insert the view in position 0 and 1
dbHistory.getCollection('transactions-view').insertMany(transactionViewList.slice(0,2))

// Wait until the scheduler do the job and then check the result
console.log("Wait until the migration job is executed...")
sleep(process.env.TIMEOUT);

if(!assertMigration(eventList, db.getCollection('eventstore'), dbHistory.getCollection('eventstore'))
    || !assertMigration(transactionViewList, db.getCollection('transactions-view'), dbHistory.getCollection('transactions-view'))){
    console.log("Integration test failed!");
    quit(1);
}else{
    console.log("Integration test completed SUCCESSFULLY!");
}

// Check that the inserted data are moved from ecommerce.eventstore to ecommerce-history.eventstore
// and from the ecommerce.transactions-view to ecommerce-history.transactions-view
function assertMigration(documentList, dbCollection, dbHistoryCollection){
    let allId = documentList.map(e => e._id)

    let docsDbHistoryArray = dbHistoryCollection
        .find({ _id: {$in: allId}})
        .toArray();

    let docsIdDbHistoryArray = docsDbHistoryArray.map(e => e._id);

    // Check the transaction that were not in the ecommerce-history now are migrated by the script
    // Excluding the last element that is too recent
    let idListValideElements = allId.slice(0,documentList.length-1)
    let documentAreMigrated = idListValideElements.reduce(
        (accumulator, currentIdValue) => accumulator && docsIdDbHistoryArray.includes(currentIdValue),
        true,
    );

    // Check that the recent event was not migrated
    let idNotValidElement = allId[allId.lenght-1]
    let tooRecentDocumentNotMigrated = !docsIdDbHistoryArray.includes(idNotValidElement)

    // Check if the valid events has the ttl set
    let docsHasTtl = dbCollection
        .find({ _id: {$in: docsIdDbHistoryArray}})
        .toArray()
        .reduce(
            (accumulator, currentDocument) => accumulator && (currentDocument.ttl > 0),
            true,
        );

    console.log("Test assertion: ",documentAreMigrated && tooRecentDocumentNotMigrated && docsHasTtl)

    return documentAreMigrated && tooRecentDocumentNotMigrated && docsHasTtl;
}
