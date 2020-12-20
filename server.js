var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);

});
