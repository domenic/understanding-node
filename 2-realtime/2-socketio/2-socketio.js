"use strict";

var http = require("http");
var url = require("url");
var path = require("path");
var ecstatic = require("ecstatic");

// http://socket.io/
var socketIO = require("socket.io");

var setupGame = require("./setupGame");


var staticFileHandler = ecstatic(path.resolve(__dirname, "public"));
var server = http.createServer(staticFileHandler);
var io = socketIO.listen(server);

setupGame(io);

server.listen(4003);
console.log("Server started on port 4003.");
