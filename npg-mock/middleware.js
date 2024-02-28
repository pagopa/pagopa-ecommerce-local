module.exports = function (req, res, next) {
  const db = req.app.db
  console.log(`${new Date().toISOString()} - Received request: ${req.method} ${req.path}
  Headers: 
  ${JSON.stringify(req.headers)}
  Body:  
  ${JSON.stringify(req.body)}
  `);
  if (req.method === 'POST') {
    // Converts POST to GET
    req.method = 'GET'
  }
  const requestPath = req.path.toString();
  const requestBody = req.body;
  if (requestPath.includes("build") && !requestPath.includes("state")) {
    //handle build data request changing response based on input paymentService
    const paymentService = requestBody.paymentSession.paymentService;
    console.log(`Received build request for payment session: ${paymentService}`);
    if (paymentService == "CARDS") {
      res.json(db.get("buildCards"))
    }
    else {
      res.json(db.get("buildApm"))
    }
  } else {
    // Continue to default JSON Server router
    next();
  }
}