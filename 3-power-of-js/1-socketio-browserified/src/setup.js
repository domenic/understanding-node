"use strict";

module.exports = function (id, socket) {
    window.addEventListener("keypress", function (ev) {
        switch (ev.charCode) {
        case "w".charCodeAt(0):
            moveCurrentPlayer(0, -10);
            break;
        case "a".charCodeAt(0):
            moveCurrentPlayer(-10, 0);
            break;
        case "s".charCodeAt(0):
            moveCurrentPlayer(0, +10);
            break;
        case "d".charCodeAt(0):
            moveCurrentPlayer(+10, 0);
            break;
        }
    });

    function moveCurrentPlayer(xDelta, yDelta) {
        var el = document.getElementById("kitten-" + id);

        if (el) {
            var currentX = parseInt(el.style.left, 10);
            var currentY = parseInt(el.style.top, 10);

            var newX = currentX + xDelta;
            var newY = currentY + yDelta;

            el.style.left = newX + "px";
            el.style.top = newY + "px";

            socket.emit("moved", { x: newX, y: newY });
        }
    }
};
