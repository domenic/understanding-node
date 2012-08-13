"use strict";

var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    fs.readFile(__filename, function (err, data) {
        res.end(data);

        console.log("Wrote the file for you.");
    });
});

server.listen(3002);
console.log("Server started on port 3002.");
