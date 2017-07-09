// Server Dependencies 
var express = require("express");
    bodyParser = require("body-parser");
    logger = require("morgan");

    PORT = process.env.PORT || 3000;
    app = express();
    mongoose = require("mongoose");

// Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect("mongodb://127.0.0.1:27017/PersonalPortfolio");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});