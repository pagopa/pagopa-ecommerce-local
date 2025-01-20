const transactions = [
    // 1 - TransactionAuthorizationOutcomeWaitingQueueConsumerV2 - AUTHORIZATION_REQUESTED
    {
        transactionId: "00000000000000000000000000000001",
        status: 'AUTHORIZATION_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000001',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000001',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 2 - TransactionAuthorizationRequestedQueueConsumerV2 - AUTHORIZATION_REQUESTED
    {
        transactionId: "00000000000000000000000000000002",
        status: 'AUTHORIZATION_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000002',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000002',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 3 - TransactionClosePaymentRetryQueueConsumerV2 - CANCELLATION_REQUESTED
    {
        transactionId: "00000000000000000000000000000003",
        status: 'CANCELLATION_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000003',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000003',
                eventCode: 'TRANSACTION_USER_CANCELED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 4 - TransactionClosePaymentRetryQueueConsumerV2 - CANCELLATION_REQUESTED - v2
    {
        transactionId: "00000000000000000000000000000004",
        status: 'CANCELLATION_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000004',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000004',
                eventCode: 'TRANSACTION_USER_CANCELED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 5 - TransactionClosePaymentRetryQueueConsumerV2 - CLOSURE_REQUESTED
    {
        transactionId: "00000000000000000000000000000005",
        status: 'CLOSURE_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000005',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000005',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000005',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000005',
                eventCode: 'TRANSACTION_CLOSURE_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000005',
                eventCode: 'TRANSACTION_CLOSURE_FAILED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 6 - TransactionClosePaymentRetryQueueConsumerV2 - CLOSURE_ERROR
    {
        transactionId: "00000000000000000000000000000006",
        status: 'CLOSURE_ERROR',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000006',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000006',
                eventCode: 'TRANSACTION_USER_CANCELED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000006',
                eventCode: 'TRANSACTION_CLOSURE_ERROR_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 7 - TransactionExpirationQueueConsumerV2 - ACTIVATED
    {
        transactionId: "00000000000000000000000000000007",
        status: 'ACTIVATED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000007',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 8 - TransactionExpirationQueueConsumerV2 - AUTHORIZATION_REQUESTED
    {
        transactionId: "00000000000000000000000000000008",
        status: 'AUTHORIZATION_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000008',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000008',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 9 - TransactionExpirationQueueConsumerV2 - AUTHORIZATION_COMPLETED
    {
        transactionId: "00000000000000000000000000000009",
        status: 'AUTHORIZATION_COMPLETED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000009',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000009',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000009',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000009',
                eventCode: 'TRANSACTION_REFUND_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 10 - TransactionExpirationQueueConsumerV2 - CANCELLATION_REQUESTED
    {
        transactionId: "00000000000000000000000000000010",
        status: 'CANCELLATION_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000010',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000010',
                eventCode: 'TRANSACTION_USER_CANCELED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 11 - TransactionExpirationQueueConsumerV2 - CLOSURE_REQUESTED
    {
        transactionId: "00000000000000000000000000000011",
        status: 'CLOSURE_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000011',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000011',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000011',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000011',
                eventCode: 'TRANSACTION_CLOSURE_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000011',
                eventCode: 'TRANSACTION_CLOSED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 12 - TransactionExpirationQueueConsumerV2 - CLOSURE_ERROR
    {
        transactionId: "00000000000000000000000000000012",
        status: 'CLOSURE_ERROR',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000012',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000012',
                eventCode: 'TRANSACTION_USER_CANCELED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000012',
                eventCode: 'TRANSACTION_CLOSURE_ERROR_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 13 - TransactionExpirationQueueConsumerV2 - CLOSED
    {
        transactionId: "00000000000000000000000000000013",
        status: 'CLOSED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000013',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000013',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000013',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000013',
                eventCode: 'TRANSACTION_CLOSURE_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000013',
                eventCode: 'TRANSACTION_CLOSED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 14 - TransactionExpirationQueueConsumerV2 - EXPIRED
    {
        transactionId: "00000000000000000000000000000014",
        status: 'EXPIRED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000014',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000014',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000014',
                eventCode: 'TRANSACTION_EXPIRED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 15 - TransactionExpirationQueueConsumerV2 - NOTIFIED_KO
    {
        transactionId: "00000000000000000000000000000015",
        status: 'NOTIFIED_KO',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        sendPaymentResultOutcome: "KO",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000015',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000015',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000015',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000015',
                eventCode: 'TRANSACTION_CLOSURE_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000015',
                eventCode: 'TRANSACTION_CLOSED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000006-0000-0000-0000-000000000015',
                eventCode: 'TRANSACTION_USER_RECEIPT_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:21.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000007-0000-0000-0000-000000000015',
                eventCode: 'TRANSACTION_USER_RECEIPT_ADDED_EVENT',
                creationDate: "2025-01-13T09:18:22.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 16 - TransactionExpirationQueueConsumerV2 - NOTIFICATION_ERROR
    {
        transactionId: "00000000000000000000000000000016",
        status: 'NOTIFICATION_ERROR',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000016',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000016',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000016',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000016',
                eventCode: 'TRANSACTION_CLOSURE_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000016',
                eventCode: 'TRANSACTION_CLOSED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000006-0000-0000-0000-000000000016',
                eventCode: 'TRANSACTION_USER_RECEIPT_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:21.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000007-0000-0000-0000-000000000016',
                eventCode: 'TRANSACTION_ADD_USER_RECEIPT_ERROR_EVENT',
                creationDate: "2025-01-13T09:18:22.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 17 - TransactionExpirationQueueConsumerV2 - NOTIFICATION_REQUESTED
    {
        transactionId: "00000000000000000000000000000017",
        status: 'NOTIFICATION_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        sendPaymentResultOutcome: "KO",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000017',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000017',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000017',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000017',
                eventCode: 'TRANSACTION_CLOSURE_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000017',
                eventCode: 'TRANSACTION_CLOSED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000006-0000-0000-0000-000000000017',
                eventCode: 'TRANSACTION_USER_RECEIPT_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:21.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000007-0000-0000-0000-000000000017',
                eventCode: 'TRANSACTION_USER_RECEIPT_ADDED_EVENT',
                creationDate: "2025-01-13T09:18:22.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 18 - TransactionExpirationQueueConsumerV2 - ACTIVATED - v2
    {
        transactionId: "00000000000000000000000000000018",
        status: 'ACTIVATED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000018',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 19 - TransactionNotificationsRetryQueueConsumerV2 - NOTIFICATION_ERROR
    {
        transactionId: "00000000000000000000000000000019",
        status: 'NOTIFICATION_ERROR',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000019',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000019',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000019',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000019',
                eventCode: 'TRANSACTION_CLOSURE_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000019',
                eventCode: 'TRANSACTION_CLOSED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000006-0000-0000-0000-000000000019',
                eventCode: 'TRANSACTION_USER_RECEIPT_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:21.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000007-0000-0000-0000-000000000019',
                eventCode: 'TRANSACTION_ADD_USER_RECEIPT_ERROR_EVENT',
                creationDate: "2025-01-13T09:18:22.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 20 - TransactionNotificationsRetryQueueConsumerV2 - NOTIFICATION_ERROR
    {
        transactionId: "00000000000000000000000000000020",
        status: 'NOTIFICATION_ERROR',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000020',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000020',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000020',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000020',
                eventCode: 'TRANSACTION_CLOSURE_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000020',
                eventCode: 'TRANSACTION_CLOSED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000006-0000-0000-0000-000000000020',
                eventCode: 'TRANSACTION_USER_RECEIPT_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:21.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000007-0000-0000-0000-000000000020',
                eventCode: 'TRANSACTION_ADD_USER_RECEIPT_ERROR_EVENT',
                creationDate: "2025-01-13T09:18:22.000000000Z[Etc/UTC]"
            },
        ]
    },
    // 21 - TransactionRefundRetryQueueConsumerV2 - REFUND_ERROR
    {
        transactionId: "00000000000000000000000000000021",
        status: 'REFUND_ERROR',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000021',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000021',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000021',
                eventCode: 'TRANSACTION_EXPIRED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000021',
                eventCode: 'TRANSACTION_REFUND_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000021',
                eventCode: 'TRANSACTION_REFUND_ERROR_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000006-0000-0000-0000-000000000021',
                eventCode: 'TRANSACTION_REFUND_RETRIED_EVENT',
                creationDate: "2025-01-13T09:18:21.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 22 - TransactionsRefundQueueConsumerV2 - REFUND_REQUESTED
    {
        transactionId: "00000000000000000000000000000022",
        status: 'REFUND_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000022',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000022',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000022',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000022',
                eventCode: 'TRANSACTION_EXPIRED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000022',
                eventCode: 'TRANSACTION_REFUND_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            }
        ]
    },
    // 23 - TransactionsRefundQueueConsumerV2 - REFUND_REQUESTED
    {
        transactionId: "00000000000000000000000000000023",
        status: 'REFUND_REQUESTED',
        creationDate: "2025-01-13T09:18:16.500000000Z[Etc/UTC]",
        events: [
            {
                eventId: '00000001-0000-0000-0000-000000000023',
                eventCode: 'TRANSACTION_ACTIVATED_EVENT',
                creationDate: "2025-01-13T09:18:16.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000002-0000-0000-0000-000000000023',
                eventCode: 'TRANSACTION_AUTHORIZATION_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:17.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000003-0000-0000-0000-000000000023',
                eventCode: 'TRANSACTION_AUTHORIZATION_COMPLETED_EVENT',
                creationDate: "2025-01-13T09:18:18.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000004-0000-0000-0000-000000000023',
                eventCode: 'TRANSACTION_EXPIRED_EVENT',
                creationDate: "2025-01-13T09:18:19.000000000Z[Etc/UTC]"
            },
            {
                eventId: '00000005-0000-0000-0000-000000000023',
                eventCode: 'TRANSACTION_REFUND_REQUESTED_EVENT',
                creationDate: "2025-01-13T09:18:20.000000000Z[Etc/UTC]"
            }
        ]
    },
];

const transactionsView = [];
const eventsStore = [];

transactions.forEach(transaction => {
    transactionsView.push(getTrasactionView(
        transaction.transactionId,
        transaction.status,
        transaction.creationDate,
        transaction.sendPaymentResultOutcome
    ));
    transaction.events.forEach(event => {
        eventsStore.push(getEventStore(
            transaction.transactionId,
            event.eventId,
            event.eventCode,
            event.creationDate,
            transaction.sendPaymentResultOutcome
        ))
    })
});

conn = new Mongo();
db = conn.getDB("ecommerce");

db.getCollection('transactions-view').insertMany(transactionsView);
db.getCollection('eventstore').insertMany(eventsStore);




function getTrasactionView(transactionId, transactionStatus, creationDate, sendPaymentResultOutcome) {
    return {
        "_id": transactionId,
        "clientId": "CHECKOUT",
        "email": {
            "data": "a4bc4c87-c111-45ca-8b6b-a40a800b4840"
        },
        "status": transactionStatus,
        "creationDate": creationDate,
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
        "sendPaymentResultOutcome": sendPaymentResultOutcome || "OK",
        "authorizationCode": "105197",
        "authorizationErrorCode": "000",
        "gatewayAuthorizationStatus": "EXECUTED",
        "_class": "it.pagopa.ecommerce.commons.documents.v2.Transaction"
    }
}

function getEventStore(transactionId, eventId, eventCode, creationDate, responseOutcome) {
    const allEvents = [
        {
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
            "eventCode": "TRANSACTION_CLOSURE_REQUESTED_EVENT",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionClosureRequestedEvent"
        },
        {
            "data": {
                "responseOutcome": responseOutcome || "OK"
            },
            "eventCode": "TRANSACTION_CLOSED_EVENT",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionClosedEvent"
        },
        {
            "data": {
                "responseOutcome": responseOutcome || "OK",
                "language": "it-IT",
                "paymentDate": "2025-01-13T10:18:15.948Z"
            },
            "eventCode": "TRANSACTION_USER_RECEIPT_REQUESTED_EVENT",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionUserReceiptRequestedEvent"
        },
        {
            "data": {
                "responseOutcome": responseOutcome || "OK",
                "language": "it-IT",
                "paymentDate": "2025-01-13T10:18:15.948Z"
            },
            "eventCode": "TRANSACTION_USER_RECEIPT_ADDED_EVENT",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionUserReceiptAddedEvent"
        },
        {
            "eventCode": "TRANSACTION_USER_CANCELED_EVENT",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionUserCanceledEvent"
        },
        {
            "eventCode": "TRANSACTION_CLOSURE_FAILED_EVENT",
            "data": {
                "responseOutcome": responseOutcome || "OK"
            },
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionClosureFailedEvent"
        },
        {
            "eventCode": "TRANSACTION_CLOSURE_ERROR_EVENT",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionClosureErrorEvent"
        },
        {
            "eventCode": "TRANSACTION_REFUND_REQUESTED_EVENT",
            "data": {
                "statusBeforeRefunded": "AUTHORIZATION_REQUESTED"
            },
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionRefundRequestedEvent"
        },
        {
            "eventCode": "TRANSACTION_EXPIRED_EVENT",
            "data": {
                "statusBeforeExpiration": "ACTIVATED"
            },
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionExpiredEvent"
        },
        {
            "data": {
                "responseOutcome": responseOutcome || "OK",
                "language": "it-IT",
                "paymentDate": "1991-05-22T06:00Z",
                "receivingOfficeName": "officeName",
                "paymentDescription": "description"
            },
            "eventCode": "TRANSACTION_ADD_USER_RECEIPT_ERROR_EVENT",
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionUserReceiptAddErrorEvent"
        },
        {
            "eventCode": "TRANSACTION_REFUND_ERROR_EVENT",
            "data": {
                "statusBeforeRefunded": "AUTHORIZATION_REQUESTED"
            },
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionRefundErrorEvent"
        },
        {
            "eventCode": "TRANSACTION_REFUND_RETRIED_EVENT",
            "data": {
                "retryCount": 1
            },
            "_class": "it.pagopa.ecommerce.commons.documents.v2.TransactionRefundRetriedEvent"
        }
    ];


    const event = allEvents.find(e => e.eventCode === eventCode);
    return {
        ...event,
        _id: eventId,
        transactionId,
        creationDate
    }
}