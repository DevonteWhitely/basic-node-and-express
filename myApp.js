var express = require('express');
var app = express();

console.log("Hello World");

app.get("/", (req, res) => {
    res.send(__dirname + "/public/index.html");
});
































 module.exports = app;
