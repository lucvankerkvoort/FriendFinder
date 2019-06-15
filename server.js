var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.static("app"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routes/htmlRoutes")(app);
// require("./app/routes/apiRoutes")(app);

app.get("/api/survey", function(req, res) {
  var survey = req.body;
  console.log(survey);
  res.send(survey);
});
app.listen(PORT, function() {
  console.log("Server listening at https://localhost" + PORT);
});
