/*
 *  This script is intended to be executed in the mongosh of the mongo container during
 *  the integration test executed in the code-review-pipelines.
 *  To test it in local use this bash script:
 *     #!/bin/bash
 *     #sleep 15
 *     echo "Starting integration testing of the migration job..."
 *
 *     docker cp migration-integration-test.js mongodb:/tmp/migration-integration-test.js
 *
 *     # Executing the script and check the result
 *     docker exec mongodb mongosh -u admin -p password --authenticationDatabase admin /tmp/migration-integration-test.js
 *
 *     # Check of the exit code of the script
 *     if [ $? -ne 0 ]; then
 *       echo "Integration test of migration job failed! Check the logs for more details ..."
 *       exit 1
 *     fi
 */

// Wait until the scheduler do the job and then check the result
console.log("Wait until the migration job is executed...")
sleep(20000);

if(!process.env.EVENT_LIST){
    console.log("ERROR: no testing data in the env variable EVENT_LIST ...");
    quit(1);
}

if(!assertMigration(eventList, db, dbHistory)){
    console.log("Integration test failed!");
    quit(1);
}else{
    console.log("Integration test completed SUCCESSFULLY!");
}



// Check that the inserted data are moved from ecommerce.eventstore to ecommerce-history.eventstore
function assertMigration(eventList, dbCollection, dbHistoryCollection){
    let docsIdDbArray = dbCollection.getCollection('eventstore').find().toArray().map(e => e._id);
    let docsIdDbHistoryArray = dbHistoryCollection.getCollection('eventstore').find().toArray().map(e => e._id);

    // Check the transaction that were not in the ecommerce-history now are migrated by the script
    // Excluding the last element that is too recent
    let documentAreMigrated = eventList.slice(0,eventList.length-1).map(e => e._id).reduce(
        (accumulator, currentIdValue) => accumulator && docsIdDbHistoryArray.includes(currentIdValue),
        true,
    );

    // Check that the recent event was not migrated
    let recentEvent = eventList[eventList.length-1]
    let tooRecentDocumentNotMigrated = !docsIdDbHistoryArray.includes(recentEvent._id)

    console.log("Test assert: ",documentAreMigrated && tooRecentDocumentNotMigrated)

    return documentAreMigrated && tooRecentDocumentNotMigrated;
}


