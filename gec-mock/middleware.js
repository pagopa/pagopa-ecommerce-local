module.exports = function (req, res, next) {
  console.log(`${new Date().toISOString()} - Received request: ${req.method} ${req.path}
  Headers: 
  ${JSON.stringify(req.headers)}
  Body:  
  ${JSON.stringify(req.body)}
  `);

  // Converts POST to GET
  if (req.method === 'POST') {
    req.method = 'GET';
  }

  // --- START PAYMENT-METHODS for IO and for CHECKOUT ---
  const methodByIdRegex = /^\/payment-methods\/([^\/]+)$/;
  const match = req.path.match(methodByIdRegex);

  if (match) {
    const id = match[1];  
    console.log("Intercepted payment method ID:", id);
    const db = require('./gec-server.json');
    if (id === "378d0b4f-8b69-46b0-8215-07785fe1aad4") {
      return res.json(db.methodByIdForCheckout);
    }
    if (id === "77cb0c8d-5aec-4b68-835f-eef824e83c4e") {
      return res.json(db.methodByIdForIO);
    }
    return res.status(404).json({ error: "Payment method not found" });
  }
  // --- END PAYMENT-METHODS for IO and for CHECKOUT ---
  
  // Continue to JSON Server router
  next()
}