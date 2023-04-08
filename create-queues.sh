#!/bin/bash

files="**/*.env"
for f in $files
do
    queues=$(cat $f | sed -nr "s/^.*=(pagopa-ecommerce-.*-queue)$/\1/p")
    for queue in $queues
        do
            echo "Found queue info [$f] file -> $queue, creating queue"
            az storage queue create -n $queue --connection-string='DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;QueueEndpoint=http://storage:10001/devstoreaccount1'
        done
done
