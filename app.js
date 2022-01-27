const express = require("express");
const app = express();
const path = require("path");

//setting up the public folder
app.use(express.static("public"));

//resgitering server for port 3000
app.listen(3000, function () {
    console.log("Server started at port 3000");
});

app.get("/", function (req, res) {
    // console.log("User requesting something.");
    res.sendFile("index.html");
});

app.get("/about", function (req, res) {
    const filePath = path.join(__dirname + "/public" + "/about.html");
    // console.log("File path: " + filePath);
    res.sendFile(filePath);
});