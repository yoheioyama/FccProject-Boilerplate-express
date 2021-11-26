require('dotenv').config();

var express = require('express');
var app = express();

console.log('Hello World');
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

/*app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });*/

let message = { message: "Hello json" };
app.get("/json", (request, response) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response.json({ message: "HELLO JSON" });
        } else {
            response.json(message);
        }
    });

































 module.exports = app;
