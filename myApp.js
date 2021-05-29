var express = require('express');
var app = express();

console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

var response;
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello json".toUpperCase();
    } else {
        response = "Hello json";
    }


app.get("/json", (req, res) => {
    res.json({
        "message": response,
    });
});






























 module.exports = app;
