"use strict";

var http = require("http");

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, world!");

    console.log("Wrote hello world for you.");
});

server.listen(3001);
console.log("Server started on port 3001.");
