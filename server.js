const express = require("express");
var paths = require("path");

//  Express App

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(paths.join(__dirname, './app/routing/apiRoutes'))(app);
require(paths.join(__dirname, './app/routing/htmlRoutes'))(app);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });