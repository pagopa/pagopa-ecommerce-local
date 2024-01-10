require("./set-polyfill");

module.exports = function (req, res, next) {

  if (req.path.toString() == "/redirectionUrl" && req.method === "POST") {
    const handlerResponse = redirectUrlHandler(req.body);

    if (Object.keys(handlerResponse).includes("status")) {
      res.status(handlerResponse.status);
    }

    res.json(handlerResponse);
    return;
  }

  // Continue to JSON Server router
  next()
}

function redirectUrlHandler(requestBody) {
  const requiredKeys = new Set(["idTransaction", "idPsp", "amount", "urlBack", "description", "paymentMethod"]);
  const optionalKeys = new Set(["paName", "idPaymentMethod"]);

  const inputKeys = new Set(Object.keys(requestBody));

  const hasAllRequiredKeys = requiredKeys.isSubsetOf(inputKeys);
  const hasOnlyKnownKeys = inputKeys.isSubsetOf(requiredKeys.union(optionalKeys));

  const idTransaction = requestBody.idTransaction;

  if (!hasAllRequiredKeys) {
    const missingKeys = requiredKeys.difference(inputKeys);
    console.error(`Missing required keys in input body: ${Array.from(missingKeys)}`);

    return {
      detail: `Missing required keys in input body: ${Array.from(missingKeys)}`,
      status: 400,
      idTransaction: idTransaction
    };
  }

  if (!hasOnlyKnownKeys) {
    const unknownKeys = inputKeys.difference(requiredKeys.union(optionalKeys));
    console.error(`Unknown keys in input body: ${Array.from(unknownKeys)}`);

    return {
      detail: `Unknown keys in input body: ${Array.from(unknownKeys)}`,
      status: 400,
      idTransaction
    };
  }

  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  const idPSPTransaction = makeid(10);

  const hasTimeout = Math.random() > 0.5;
  const timeout = 10_000;

  return {
    url: `http://localhost:8096/${requestBody.idTransaction}`,
    idTransaction,
    idPSPTransaction,
    amount: requestBody.amount,
    timeout: hasTimeout ? timeout : undefined
  };
}
