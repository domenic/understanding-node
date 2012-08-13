(function () {
    "use strict";

    var socket = io.connect();
    socket.on("idAssigned", setupThisPlayer);
    socket.on("playerJoined", addPlayer);
    socket.on("playerLeft", removePlayer);
    socket.on("playerMoved", movePlayer);

    function setupThisPlayer(ev) {
        var id = ev.id;

        window.addEventListener("keypress", function (ev) {
            switch (ev.charCode) {
            case "w".charCodeAt(0):
                moveCurrentPlayer(id, 0, -10);
                break;
            case "a".charCodeAt(0):
                moveCurrentPlayer(id, -10, 0);
                break;
            case "s".charCodeAt(0):
                moveCurrentPlayer(id, 0, +10);
                break;
            case "d".charCodeAt(0):
                moveCurrentPlayer(id, +10, 0);
                break;
            }
        });
    }

    function moveCurrentPlayer(id, xDelta, yDelta) {
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

    function addPlayer(ev) {
        var el = document.createElement("img");
        el.id = "kitten-" + ev.id;
        el.src = "http://placekitten.com/50/50?image=" + (ev.id % 16);
        el.style.left = ev.x + "px";
        el.style.top = ev.y + "px";

        document.getElementById("game").appendChild(el);
    }

    function removePlayer(ev) {
        var el = document.getElementById("kitten-" + ev.id);

        if (el) {
            el.parentElement.removeChild(el);
        }
    }

    function movePlayer(ev) {
        var el = document.getElementById("kitten-" + ev.id);

        if (el) {
            el.style.left = ev.x + "px";
            el.style.top = ev.y + "px";
        }
    }
}());
