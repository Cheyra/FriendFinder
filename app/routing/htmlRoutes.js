//var express = require("express")
var paths = require("path");

// Create express app instance.
//var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
//var PORT = process.env.PORT || 8080;
//var friend =[]
module.exports = function(app){

app.get("/home", function(req, res) {
    res.sendFile(paths.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(paths.join(__dirname, "../public/survey.html"));
  });
}
//   app.get("/api/friends", function(req, res) {
//     return res.json(friends)
//   });
  
// app.post("/api/friends", function(req, res) {
//     var newFriend = req.body;
//     friends.push(newfriend)
// })
  // app.listen(PORT, function() {
  //   console.log("App listening on PORT " + PORT);
  // });