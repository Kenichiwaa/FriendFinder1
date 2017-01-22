// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Set up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.text()); TODO ???
//app.use(bodyParser.json({ type: "application/vnd.api+json" })); //TODO ???


// inlcude html routes in this server file using express
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Sets up site on local host
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
