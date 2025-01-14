const transactions = [
    // 1 - TransactionAuthorizationOutcomeWaitingQueueConsumerV2
    {
        transactionId: "00000000000000000000000000000001",
        status: 'AUTHORIZATION_REQUESTED',
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000001',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT'
            },
            {
                eventId: '00000002-0000-0000-0000-000000000001',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT'
            }
        ]
    },

    // 2 - TransactionAuthorizationRequestedQueueConsumerV2
    {
        transactionId: "00000000000000000000000000000002",
        status: 'AUTHORIZATION_REQUESTED',
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000002',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT'
            },
            {
                eventId: '00000002-0000-0000-0000-000000000002',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT'
            }
        ]
    },

    // 3 - TransactionClosePaymentRetryQueueConsumerV2
    {
        transactionId: "00000000000000000000000000000003",
        status: 'CANCELLATION_REQUESTED',
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000003',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT'
            },
            {
                eventId: '00000002-0000-0000-0000-000000000003',
                eventCode: 'TRANSACTION_USER_CANCELED_EVENT'
            }
        ]
    }

    // 4 - TransactionExpirationQueueConsumerV2
    // 5 - TransactionNotificationsRetryQueueConsumerV2
    // 6 - TransactionRefundRetryQueueConsumerV2
];

const transactionsView = [];
const eventsStore = [];

transactions.forEach(transaction => {
    transactionsView.push(getTrasactionView(transaction.transactionId, transaction.status));
    transaction.events.forEach(event => {
        eventsStore.push(getEventStore(transaction.transactionId, event.eventId, event.eventCode))
    })
});

conn = new Mongo();
db = conn.getDB("ecommerce");

db.getCollection('transactions-view').insertMany(transactionsView);
db.getCollection('eventstore').insertMany(eventsStore);


const allEvents = [{
    "_id": "2080f909-6c9a-4445-a026-794a25b864f0",
    "transactionId": "673ac71279114e5787a9c715938f8dbc",
    "creationDate": "2025-01-13T09:18:15.998058766Z[Etc/UTC]",
    "data": {
        "email": {
            "data": "a4bc4c87-c111-45ca-8b6b-a40a800b4840"
        },
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
        "clientId": "CHECKOUT",
        "paymentTokenValiditySeconds": 900,
        "transactionGatewayActivationData": {
            "orderId": "E1736759869766ybQ4",
            "correlationId": "f878f527-0d9d-4ffe-b641-0fa8cb998b3a",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.activation.NpgTransactionGatewayActivationData"
        }
    },
    "eventCode": "TRANSACTION_ACTIVATED_EVENT",
    "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionActivatedEvent"
},
{
    "_id": "c39e1f21-57a4-45b1-8902-afd03fbc81fb",
    "transactionId": "673ac71279114e5787a9c715938f8dbc",
    "creationDate": "2025-01-13T09:18:22.470019350Z[Etc/UTC]",
    "data": {
        "amount": 12000,
        "fee": 95,
        "paymentInstrumentId": "e7058cac-5e1a-4002-8994-5bab31e9f385",
        "pspId": "BNLIITRR",
        "paymentTypeCode": "CP",
        "brokerName": "05963231005",
        "pspChannelCode": "05963231005_01",
        "paymentMethodName": "CARDS",
        "pspBusinessName": "Worldline Merchant Services Italia S.p.A.",
        "isPspOnUs": false,
        "authorizationRequestId": "E1736759869766ybQ4",
        "paymentGateway": "NPG",
        "paymentMethodDescription": "Carte di Credito e Debito",
        "transactionGatewayAuthorizationRequestedData": {
            "logo": "https://assets.cdn.platform.pagopa.it/creditcard/mastercard.png",
            "brand": "MC",
            "sessionId": "6323a063-b23a-40f9-a542-19e8d7ca1b48",
            "confirmPaymentSessionId": "025b4886-d9a1-4023-875d-85a282d7a60c",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.authorization.NpgTransactionGatewayAuthorizationRequestedData"
        },
        "idBundle": "98d24e9a-ab8b-48e3-ae84-f0c16c64db3b"
    },
    "eventCode": "TRANSACTION_AUTHORIZATION_REQUESTED_EVENT",
    "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionAuthorizationRequestedEvent"
},
{
    "_id": "e08fb1c7-61cb-4748-93a0-89e949eb4688",
    "transactionId": "673ac71279114e5787a9c715938f8dbc",
    "creationDate": "2025-01-13T09:18:53.478704692Z[Etc/UTC]",
    "data": {
        "authorizationCode": "105197",
        "rrn": "250139026637",
        "timestampOperation": "2025-01-13T09:18:39.930Z",
        "transactionGatewayAuthorizationData": {
            "operationResult": "EXECUTED",
            "operationId": "750099794759650139",
            "paymentEndToEndId": "750099794759650139",
            "errorCode": "000",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.authorization.NpgTransactionGatewayAuthorizationData"
        }
    },
    "eventCode": "TRANSACTION_AUTHORIZATION_COMPLETED_EVENT",
    "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionAuthorizationCompletedEvent"
},
{
    "_id": "eb824427-db37-4d2f-9323-8134f686f757",
    "transactionId": "673ac71279114e5787a9c715938f8dbc",
    "creationDate": "2025-01-13T09:18:54.147456227Z[Etc/UTC]",
    "eventCode": "TRANSACTION_CLOSURE_REQUESTED_EVENT",
    "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionClosureRequestedEvent"
},
{
    "_id": "17fd6df1-be2c-4bd3-86ed-31bfa290a75e",
    "transactionId": "673ac71279114e5787a9c715938f8dbc",
    "creationDate": "2025-01-13T09:18:55.709533557Z[Etc/UTC]",
    "data": {
        "responseOutcome": "OK"
    },
    "eventCode": "TRANSACTION_CLOSED_EVENT",
    "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionClosedEvent"
},
{
    "_id": "adf674f8-1fff-451d-8171-d5fcea4a7802",
    "transactionId": "673ac71279114e5787a9c715938f8dbc",
    "creationDate": "2025-01-13T09:18:57.947625195Z[Etc/UTC]",
    "data": {
        "responseOutcome": "OK",
        "language": "it-IT",
        "paymentDate": "2025-01-13T10:18:15.948Z"
    },
    "eventCode": "TRANSACTION_USER_RECEIPT_REQUESTED_EVENT",
    "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionUserReceiptRequestedEvent"
},
{
    "_id": "4b77443a-b232-4622-aee4-5298dc74b2aa",
    "transactionId": "673ac71279114e5787a9c715938f8dbc",
    "creationDate": "2025-01-13T09:19:00.716680197Z[Etc/UTC]",
    "data": {
        "responseOutcome": "OK",
        "language": "it-IT",
        "paymentDate": "2025-01-13T10:18:15.948Z"
    },
    "eventCode": "TRANSACTION_USER_RECEIPT_ADDED_EVENT",
    "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionUserReceiptAddedEvent"
},
{
    "_id": "94453aaa-2fa1-4bf8-be69-f435925e4d17",
    "transactionId": "0284a919f46d45c8b0e58f0f0eee025e",
    "creationDate": "2025-01-13T09:21:21.726148919Z[Etc/UTC]",
    "eventCode": "TRANSACTION_USER_CANCELED_EVENT",
    "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionUserCanceledEvent"
}];

function getTrasactionView(transactionId, transactionStatus) {
    return {
        "_id": transactionId,
        "clientId": "CHECKOUT",
        "email": {
            "data": "a4bc4c87-c111-45ca-8b6b-a40a800b4840"
        },
        "status": transactionStatus,
        "creationDate": "2025-01-13T09:18:16.240829798Z[Etc/UTC]",
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
}

function getEventStore(transactionId, eventId, eventCode) {
    const event = allEvents.find(e => e.eventCode === eventCode);
    return {
        ...event,
        transactionId,
        _id: eventId
    }
}