// requirements
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes to be added!!!!!
var routes = require("./controllers/burgers_controller.js");
app.use(routes);