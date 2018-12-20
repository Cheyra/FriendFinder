
var paths = require("path");


module.exports = function(app){

app.get("/home", function(req, res) {
    res.sendFile(paths.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(paths.join(__dirname, "../public/survey.html"));
  });
}
