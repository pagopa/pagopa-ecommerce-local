# pagopa-ecommerce-local

All you need to start the whole pagopa eCommerce platform locally for development purposes and integration tests:

![image arch](arch-ecommerce.png)

for more details you can read [eCommerce pagoPA Design Review](https://pagopa.atlassian.net/wiki/spaces/I/pages/492339720/eCommerce+pagoPA+Design+Review+draft "eCommerce pagoPA Design Review") 

### Configure

In the _.env_ file there are configurations related to containers that can be customized, in particular the container ports and the services git branch to run a given version of microservices.

#### Infrastructure Services

| name                                     | description                                                                                                                                      |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| MONGO_PORT                               | The port the mongodb listens to.                                                                                                                 |
| MONGO_EXPRESS_PORT                       | The port the mongo-express listens to.                                                                                                           |
| REDIS_PORT                               | The port the redis listens to.                                                                                                                   |
| REDIS_INSIGHT_PORT                       | The port the redis-insight listens to.                                                                                                           |
| SIGNOZ_PORT                              | The port the SigNoz observability UI listens to.                                                                                                 |

#### Core Services

| name                                         | description                                                                                                                                         |
|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| NODO_MOCK_PORT                               | The port the nodo-mock listens to.                                                                                                                  |
| NODO_MOCK_COMMIT_SHA                         | The branch or commit SHA you want to build from. Used when the code is fetched from remote repo.                                                    |
| ECOMMERCE_TRANSACTIONS_PORT                  | The port the pagopa-ecommerce-transactions-service listens to.                                                                                      |
| ECOMMERCE_TRANSACTIONS_COMMIT_SHA            | The branch or commit SHA of pagopa-ecommerce-transactions-service you want to build from. Used when the code is fetched from remote repo.           |
| ECOMMERCE_PAYMENT_METHODS_PORT               | The port the pagopa-ecommerce-payment-methods-service listens to.                                                                                   |
| ECOMMERCE_PAYMENT_METHODS_COMMIT_SHA         | The branch or commit SHA of pagopa-ecommerce-payment-methods-service you want to build from. Used when the code is fetched from remote repo.        |
| ECOMMERCE_PAYMENT_METHODS_HANDLER_PORT       | The port the pagopa-ecommerce-payment-methods-handler listens to.                                                                                   |
| ECOMMERCE_PAYMENT_METHODS_HANDLER_COMMIT_SHA | The branch or commit SHA of pagopa-ecommerce-payment-methods-handler you want to build from. Used when the code is fetched from remote repo.        |
| ECOMMERCE_PAYMENT_REQUESTS_PORT              | The port the pagopa-ecommerce-payment-requests-service listens to.                                                                                  |
| ECOMMERCE_PAYMENT_REQUESTS_COMMIT_SHA        | The branch or commit SHA of pagopa-ecommerce-payment-requests-service you want to build from. Used when the code is fetched from remote repo.       |
| ECOMMERCE_EVENT_DISPATCHER_PORT              | The port the pagopa-ecommerce-event-dispatcher-service listens to.                                                                                  |
| ECOMMERCE_EVENT_DISPATCHER_COMMIT_SHA        | The branch or commit SHA of pagopa-ecommerce-event-dispatcher-service you want to build from. Used when the code is fetched from remote repo.       |
| ECOMMERCE_TRANSACTIONS_SCHEDULER_PORT        | The port the pagopa-ecommerce-transactions-scheduler-service listens to.                                                                            |
| ECOMMERCE_TRANSACTIONS_SCHEDULER_COMMIT_SHA  | The branch or commit SHA of pagopa-ecommerce-transactions-scheduler-service you want to build from. Used when the code is fetched from remote repo. |
| ECOMMERCE_USER_STATS_PORT                    | The port the pagopa-ecommerce-user-stats-service listens to.                                                                                        |
| ECOMMERCE_USER_STATS_COMMIT_SHA              | The branch or commit SHA of pagopa-ecommerce-user-stats-service you want to build from. Used when the code is fetched from remote repo.             |
| ECOMMERCE_HELPDESK_COMMANDS_PORT             | The port the pagopa-ecommerce-helpdesk-commands-service listens to.                                                                                 |
| ECOMMERCE_HELPDESK_COMMANDS_COMMIT_SHA       | The branch or commit SHA of pagopa-ecommerce-helpdesk-commands-service you want to build from. Used when the code is fetched from remote repo.      |
| ECOMMERCE_CDC_PORT                           | The port the pagopa-ecommerce-cdc-service listens to.                                                                                               |
| ECOMMERCE_CDC_COMMIT_SHA                     | The branch or commit SHA of pagopa-ecommerce-cdc-service you want to build from. Used when the code is fetched from remote repo.                    |
| NOTIFICATIONS_SERVICE_PORT                   | The port the pagopa-notifications-service listens to.                                                                                               |
| NOTIFICATIONS_SERVICE_COMMIT_SHA             | The branch or commit SHA of pagopa-notifications-service you want to build from. Used when the code is fetched from remote repo.                    |

#### Mock Services

| name                                     | description                                                                                                                                      |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| AFM_PORT                                 | The port the pagopa-gec-mock (AFM) listens to.                                                                                                   |
| NPG_PORT                                 | The port the pagopa-npg-mock listens to.                                                                                                         |
| PGS_PORT                                 | The port the pagopa-pgs-mock listens to.                                                                                                         |
| PSP_MOCK_PORT                            | The port the pagopa-psp-mock listens to.                                                                                                         |
| WALLET_PORT                              | The port the pagopa-wallet-mock listens to.                                                                                                      |
| PDV_MOCK_PORT                            | The port the pagopa-pdv-mock (Personal Data Vault) listens to.                                                                                   |
| JWT_ISSUER_MOCK_PORT                     | The port the pagopa-jwt-issuer-mock listens to.                                                                                                  |
| PAGOPA_JWT_ISSUER_COMMIT_SHA             | The branch or commit SHA of pagopa-jwt-issuer-mock you want to build from. Used when the code is fetched from remote repo.                       |

In addiction, the parameters of the individual microservices can also be customized by editing the env file contained in the folder of the specific service.

### Run eCommerce pagoPA

```sh
docker-compose up
```

If you use the default configurations, we will have the following services exposed:

#### Core eCommerce Services

| service                                           | url                                                                     |
|---------------------------------------------------|-------------------------------------------------------------------------|
| `nodo-mock`                                       | http://localhost:3002/webservices/pof/PagamentiTelematiciPspNodoservice |
| `pagopa-ecommerce-transactions-service`           | http://localhost:8080/transactions                                      |
| `pagopa-ecommerce-payment-methods-service`        | http://localhost:8083/payment-methods                                   |
| `pagopa-ecommerce-payment-methods-handler`        | http://localhost:8082/payment-methods                                   |
| `pagopa-ecommerce-payment-requests-service`       | http://localhost:8089/payment-requests and http://localhost:8089/carts  |
| `pagopa-ecommerce-event-dispatcher-service`       | http://localhost:9000/event-dispatcher                                  |
| `pagopa-ecommerce-transactions-scheduler-service` | http://localhost:8091/scheduler                                         |
| `pagopa-ecommerce-user-stats-service`             | http://localhost:8097/user                                              |
| `pagopa-ecommerce-helpdesk-commands-service`      | http://localhost:8087/commands                                          |
| `pagopa-ecommerce-cdc-service`                    | http://localhost:8099/cdc                                               |
| `pagopa-notifications-service`                    | http://localhost:8086/emails                                            |

#### Mock Services

| service                  | url                         |
|--------------------------|-----------------------------|
| `pagopa-gec-mock` (AFM)  | http://localhost:8085       |
| `pagopa-npg-mock`        | http://localhost:8093       |
| `pagopa-psp-mock`        | http://localhost:8096       |
| `pagopa-wallet-mock`     | http://localhost:8095       |
| `pagopa-pdv-mock`        | http://localhost:8092       |
| `pagopa-jwt-issuer-mock` | http://localhost:8098       |

#### Infrastructure & Observability

You can check data persisted to either Mongo, Redis or SigNoz for example with their respective web interfaces (Mongo express/Redis Insight/SigNoz UI). To do so, go to:

| service             | url                                         |
|---------------------|---------------------------------------------|
| `Traefik Dashboard` | http://localhost:8090                       |
| `Traefik Proxy`     | http://localhost:8000                       |
| `Redis Insight`     | http://localhost:8001                       |
| `Mongo Express`     | http://localhost:8081                       |
| `SigNoz UI`         | http://localhost:3301                       |
| `ClickHouse`        | http://localhost:8123 (HTTP), 9001 (native) |
| `OTEL Collector`    | http://localhost:4318 (HTTP), 4317 (gRPC)   |


### Observability with SigNoz

This setup includes [SigNoz](https://signoz.io/), a complete observability platform that provides distributed tracing, metrics, and logs for all eCommerce services.

#### Accessing SigNoz

Navigate to **http://localhost:3301** to access the SigNoz UI where you can:
- View distributed traces across all microservices
- Monitor service metrics (latency, throughput, error rates)
- Query and analyze application logs
- Visualize service dependencies and performance

#### OpenTelemetry Configuration

All services are instrumented with OpenTelemetry Java agent and send telemetry data to the OTEL collector at:
- **gRPC**: `localhost:4317`
- **HTTP**: `localhost:4318`

To enable/disable telemetry for a specific service, modify the service's `.env` file:
```bash
# Enable telemetry
OTEL_TRACES_EXPORTER=otlp
OTEL_METRICS_EXPORTER=otlp
OTEL_LOGS_EXPORTER=otlp

# Disable telemetry
OTEL_TRACES_EXPORTER=none
OTEL_METRICS_EXPORTER=none
OTEL_LOGS_EXPORTER=none
```

#### SigNoz Components

The observability stack includes:
- **SigNoz UI**: Web interface for viewing telemetry data
- **ClickHouse**: Time-series database for storing traces, metrics, and logs
- **OTEL Collector**: Receives and processes OpenTelemetry data
- **Zookeeper**: Coordination service for ClickHouse cluster

**Note**: On first startup, the schema migrator creates all necessary database tables. This process takes 1-3 minutes and only runs once.

### Data Persistence & Debugging

#### MongoDB
If you want to connect to MongoDB using an external client (such as Mongo Compass etc) you will have to add an entry in hosts file:

```
127.0.0.1 pagopa-ecommerce-mongo
```
to map the pagopa-ecommerce-mongo hostname with localhost. This is required since mongo is started as a replica set with that hostname.

You can also use **Mongo Express** at http://localhost:8081 for a web-based interface.

#### Redis
Use **Redis Insight** at http://localhost:8001 to inspect Redis data.

### Building Services

When changing configuration parameters, remember to rebuild containers with:
```sh
docker-compose build SERVICE_NAME [--no-cache]
```

### Create azurite queues

There is the `azurite-init` container that automatically creates all queue and, once done, terminate it's execution.

To recreate the queues simply run again the above container.

If env files have been changed run again azurite-init to make the container again to start new queues automatic creation processing

### Service Integration Notes

#### Helpdesk Commands Service
The `pagopa-ecommerce-helpdesk-commands-service` provides manual operations support for the ecommerce platform:

- **Refund Operations**: Manual transaction refunds across payment gateways
- **Notification Management**: Email notification resending capabilities
- **Integration Testing**: Includes polling-based tests that verify transaction state transitions

#### eCommerce CDC Service
The `pagopa-ecommerce-cdc-service` provides real-time Change Data Capture functionality for the ecommerce platform:

- **Transaction Event Processing**: Monitors MongoDB change streams for transaction lifecycle events
- **Real-time Updates**: Processes transaction state changes in near real-time
- **Event Streaming**: Captures and processes events such as transaction creation, authorization, and completion
- **Integration Testing**: Provides comprehensive event processing capabilities for testing transaction flows

### Troubleshooting

To fix:
```sh
#0 135.0 [output clipped, log limit 1MiB reached]
```

run docker compose with:
```sh
DOCKER_BUILDKIT=1DOCKER

#### SigNoz Startup Time

On first startup, the SigNoz schema migrator creates all necessary database tables. This process:
- Takes 1-3 minutes on first run
- Only runs when schema changes are detected
- Is required for SigNoz to function properly

If services seem to hang during startup, check `docker-compose logs signoz-schema-migrator` to see migration progress.

#### Disable SigNoz for Faster Development

If you don't need observability during development, you can disable telemetry for specific services by setting in their `.env` files:
```bash
OTEL_TRACES_EXPORTER=none
OTEL_METRICS_EXPORTER=none
OTEL_LOGS_EXPORTER=none
```

Alternatively, to disable the entire SigNoz stack, comment out these services in `docker-compose.yml`:
- `signoz`
- `signoz-clickhouse`
- `signoz-otel-collector`
- `signoz-zookeeper`
- `signoz-init-clickhouse`
- `signoz-schema-migrator`
