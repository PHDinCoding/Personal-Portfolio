// Server Dependencies 
var express = require("express");
    bodyParser = require("body-parser");
    logger = require("morgan");

    PORT = 3000;
    app = express();

// Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});