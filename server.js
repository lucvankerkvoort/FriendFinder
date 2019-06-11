var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.static(__dirname + "/app/style"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routes/htmlRoutes")(app);
// require("./app/routes/apiRoutes")(app);

app.listen(PORT, function() {
  console.log("Server listening at https://localhost" + PORT);
});
