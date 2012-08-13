"use strict";

var nextPlayerId = 0;

module.exports = function (io) {
    io.sockets.on("connection", function (socket) {
        var playerId = nextPlayerId++;

        // Broadcast that a new player has joined, at a randomly-generated position.
        io.sockets.emit("playerJoined", {
            id: playerId,
            x: rand(500),
            y: rand(500)
        });

        // Tell this particular client what ID we have assigned it.
        socket.emit("idAssigned", { id: playerId });

        // When this player disconnects, let everyone know.
        socket.on("disconnect", function () {
            socket.broadcast.emit("playerLeft", { id: playerId });
        });

        // When this client sends a "moved" message, rebroadcast it to all other clients.
        socket.on("moved", function (ev) {
            socket.broadcast.emit("playerMoved", {
                id: playerId,
                x: ev.x,
                y: ev.y
            });
        });
    });
};

function rand(max) {
    return Math.round(Math.random() * max);
}
