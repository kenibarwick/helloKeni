var express = require("express");
var PORT = process.env.port || 8080;
var app = express();
var alexa_app = require('./index.js');

alexa_app.express({
  expressApp: app,
  router: express.Router(),
  checkCert: false,
  debug: true
});

app.listen(PORT);
console.log("listening on http://localhost:" + PORT);
