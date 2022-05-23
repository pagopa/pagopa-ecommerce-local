CREATE TABLE PP_BPAY_PAYMENT_RESPONSE (
  ID                          NUMERIC NOT NULL,
  OUTCOME                     NUMERIC,
  ERROR_CODE                  VARCHAR(5),
  MESSAGE                     VARCHAR(100),
  CORRELATION_ID              VARCHAR(50),
  ID_PAGOPA                   NUMERIC,
  CLIENT_GUID				          VARCHAR(40),
  IS_PROCESSED 				        NUMERIC,
  MDC_INFO                    VARCHAR(500),
  CONSTRAINT PK_BPAY_PAYMENT_RESPONSE PRIMARY KEY (ID)
);

CREATE UNIQUE INDEX BPAY_CORRELATION_ID_IDX ON PP_BPAY_PAYMENT_RESPONSE (CORRELATION_ID);
CREATE UNIQUE INDEX BPAY_ID_PAGOPA_IDX ON PP_BPAY_PAYMENT_RESPONSE (ID_PAGOPA);

CREATE SEQUENCE SEQ_BPAY_PAYMENT_RESPONSE
START WITH 1
INCREMENT BY 1