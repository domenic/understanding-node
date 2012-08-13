"use strict";

var http = require("http");
var url = require("url");

// https://npmjs.org/package/request
var request = require("request");

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var urlToPipe = parsedUrl.query["pipe-me"];

    if (urlToPipe) {
        request(urlToPipe).pipe(res);
        console.log("Piped the web request for you.");
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Don't forget to give me a pipe-me URL!");
    }
});

server.listen(3004);
console.log("Server started on port 3004.");
