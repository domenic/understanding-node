"use strict";

var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    fs.createReadStream(__filename).pipe(res);

    console.log("Piped the file for you.");
});

server.listen(3003);
console.log("Server started on port 3003.");
