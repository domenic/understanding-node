"use strict";

var http = require("http");
var url = require("url");
var path = require("path");

// https://npmjs.org/package/ecstatic
var ecstatic = require("ecstatic");

var staticFileHandler = ecstatic(path.resolve(__dirname, "public"));

// Our own module!
var sendGitHubEvents = require("./sendGitHubEvents");

var server = http.createServer(function (req, res) {
    if (url.parse(req.url).pathname === "/events") {
        sendGitHubEvents(req, res);
    } else {
        staticFileHandler(req, res);
    }
});

server.listen(4002);
console.log("Server started on port 4002.");
