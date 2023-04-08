# pagopa-ecommerce-local

All you need to start the whole pagopa eCommerce platform locally for development purposes and integration tests:

![image arch](arch-ecommerce.png)

for more details you can read [eCommerce pagoPA Design Review](https://pagopa.atlassian.net/wiki/spaces/I/pages/492339720/eCommerce+pagoPA+Design+Review+draft "eCommerce pagoPA Design Review") 

### Configure

In the _.env_ file there are a configurations related to conainers that can be customized, in particular the container ports and the services git branch to run a given version of microservices.

| name                                     | description                                                                                                                                      |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| MONGO_PORT                               | The port the mongodb listens to.                                                                                                                 |
| MONGO_EXPRESS_PORT                       | The port the mongo-express listens to.                                                                                                           |
| REDIS_PORT                               | The port the redis listens to.                                                                                                                   |
| REDIS_INSIGHT_PORT                       | The port the redis-insight listens to.                                                                                                           |
| REDIS_PORT                               | The port the redis listens to.                                                                                                                   |
| NODO_MOCK_PORT                           | The port the nodo-mock listens to.                                                                                                               |
| NODO_MOCK_COMMIT_SHA                     | The branch or commit SHA you want to build from. Used when the code is fetched from remote repo.                                                 | 
| ECOMMERCE_TRANSACTIONS_PORT              | The port the pagopa-ecommerce-transactions-service listens to.                                                                                   |
| ECOMMERCE_TRANSACTIONS_COMMIT_SHA        | The branch or commit SHA of pagopa-ecommerce-transactions-service you want to build from. Used when the code is fetched from remote repo.        |
| ECOMMERCE_PAYMENT_METHODS_PORT           | The port the pagopa-ecommerce-payment-methods-service listens to.                                                                                |
| ECOMMERCE_PAYMENT_METHODS_COMMIT_SHA     | The branch or commit SHA of pagopa-ecommerce-payment-methods-service you want to build from. Used when the code is fetched from remote repo.     |
| NOTIFICATIONS_SERVICE_PORT               | The port the pagopa-notifications-service listens to.                                                                                            |
| NOTIFICATIONS_SERVICE_COMMIT_SHA         | The branch or commit SHA of pagopa-notifications-service you want to build from. Used when the code is fetched from remote repo.                 |
| ECOMMERCE_PAYMENT_REQUESTS_COMMIT_SHA    | The branch or commit SHA of pagopa-ecommerce-payment-requests-service you want to build from. Used when the code is fetched from remote repo.    | 
| ECOMMERCE_PAYMENT_REQUESTS_PORT          | The port the pagopa-ecommerce-payment-requests-service listens to.                                                                               |


In addiction, the parameters of the individual microservices can also be customized by editing the env file contained in the folder of the specific service.

### Run eCommerce pagoPA

```sh
docker-compose up
```

If you use the default configurations, we will have the following services exposed:

| service                                        | url                                                                     |
|------------------------------------------------|-------------------------------------------------------------------------|
| `nodo-mock`                                    | http://localhost:3002/webservices/pof/PagamentiTelematiciPspNodoservice |
| `pagopa-ecommerce-transactions-service`        | http://localhost:8080/transactions                                      |
| `pagopa-ecommerce-payment-methods-service`     | http://localhost:8083/payment-methods                                   |
| `pagopa-ecommerce-payment-requests-service`    | http://localhost:8088/payment-requests and http://localhost:8088/carts  |


You can check data persisted to either Mongo or Redis with their respective web interfaces (Mongo express/Redis Insight). To do so, go to:

| service         | url                   |
|-----------------|-----------------------|
| `Redis Insight` | http://localhost:8001 |
| `Mongo Express` | http://localhost:8081 |

When changing configuration parameters, remember to rebuild containers with
```sh
docker-compose build SERVICE_NAME [--no-cache]
```

### Create azurite queues

The below command will read all module env files and create all queue that are in the ``pagopa-ecommerce-...-queue`` form

```sh
 create-queues.sh  
 ```

### Troubleshooting

To fix:
```sh
#0 135.0 [output clipped, log limit 1MiB reached]
```

run docker compose with:
```sh
DOCKER_BUILDKIT=1DOCKER
```