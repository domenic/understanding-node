"use strict";

var http = require("http");
var url = require("url");
var request = require("request");

var rewriteBody = require("./rewriteBody");

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var urlToProxy = parsedUrl.query["proxy-me"];

    if (urlToProxy) {
        request(urlToProxy, function (err, proxyReq, body) {
            rewriteBody(body, urlToProxy, function (err, newBody) {
                res.end(newBody);
            });
        });
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Don't forget to give me a proxy-me URL!");
    }
});

server.listen(5002);
console.log("Server started on port 5002.");
