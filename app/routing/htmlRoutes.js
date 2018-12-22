
var paths = require("path");

//establish and export paths
module.exports = function(app){

app.get("/", function(req, res) {
    res.sendFile(paths.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(paths.join(__dirname, "../public/survey.html"));
  });
}
