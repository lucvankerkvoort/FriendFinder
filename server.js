// We require the express module
var express = require("express");

// We invoke the express module inside of the app object
var app = express();
var PORT = 3000;

// We use express static to use static data on the server through middleware
app.use(express.static("app"));

// We use a parsing method for express so it can read and send JSON objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We require our routers to send and receive data
require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);

// We listen at the port specified so we can host the server locally
app.listen(PORT, function() {
  console.log("Server listening at https://localhost" + PORT);
});
