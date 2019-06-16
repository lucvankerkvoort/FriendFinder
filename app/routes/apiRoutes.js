// We export the entire function to our server file so we can use the functionality
module.exports = function(app) {
  // We create an object to hold our user data
  app.post("/api/survey", function(req, res) {
    var userInput = req.body;
    console.log({ userInput });
    res.send(userInput);
  });
};
