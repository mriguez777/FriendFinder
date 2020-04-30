var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");

var apiRoutes = require("./app/routing/api-Routes.js");
var htmlRoutes = require("./app/routing/html-Routes.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

apiRoutes(app);
htmlRoutes(app);

// Listener - Start the server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
