module.exports = function (req, res, next) {
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
  const requestPath = req.path;
  const db = req.app.db;
  //POST notification mock, return 200 with no body
  if (requestPath.includes("/notifications")) {
    res.status(200).send();
  }
  //auth data with wallet null wallet id  -> auth data with contextual onboarding
  else if (requestPath.includes("auth-data")) {
    if (requestPath.includes("00000000-0000-0000-0000-000000000000")) {
      res.json(db.get("authDataContextualOnboarding"));
    } else {
      res.json(db.get("authData"));
    }
  } else {
    // Continue to JSON Server router
    next();
  }
}