var express = require('express');
var app = express();
require('dotenv').config()

console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
            "message": "HELLO JSON"
        })
    } else {
        res.json({
            "message": "Hello json"
        })
    }
});

// app.get("/json", (req, res) => {
//     var response = res.json({"message": "Hello json"});
//     if (process.env.MESSAGE_STYLE === "uppercase") {
//         response = response.message.toUpperCase();
//     } res.json(response);
// });






























 module.exports = app;
