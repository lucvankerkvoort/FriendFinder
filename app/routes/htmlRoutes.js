// We require the path module
var path = require("path");

// we export this entire document to the server.js file
module.exports = function(app) {
  // these are the routes a person can take on the webpage
  // this is the default that leads to the homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // this is the home route that leads to the homepage
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // this is the survey route
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
