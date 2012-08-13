"use strict";

var playerManipulation = require("./playerManipulation");
var setup = require("./setup");

var socket = io.connect();

socket.on("playerJoined", playerManipulation.addPlayer);
socket.on("playerLeft", playerManipulation.removePlayer);
socket.on("playerMoved", playerManipulation.movePlayer);

socket.on("idAssigned", function (ev) {
    setup(ev.id, socket);
});
