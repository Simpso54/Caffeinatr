var express = require("express");
var app = express();
var db = require("./db");

app.get("/", function(req, res) {
    res.send("Oh shit, whaddup.");
    res.send("It's dat boi!!!!! Suh Dude");
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});

app.get("/hello", function(req, res) {
    db.sayHello();
    res.end();
});
