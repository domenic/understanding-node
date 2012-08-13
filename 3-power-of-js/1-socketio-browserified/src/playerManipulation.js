"use strict";

exports.addPlayer = function (ev) {
    var el = document.createElement("img");
    el.id = "kitten-" + ev.id;
    el.src = "http://placekitten.com/50/50?image=" + (ev.id % 16);
    el.style.left = ev.x + "px";
    el.style.top = ev.y + "px";

    document.getElementById("game").appendChild(el);
};

exports.removePlayer = function (ev) {
    var el = document.getElementById("kitten-" + ev.id);

    if (el) {
        el.parentElement.removeChild(el);
    }
};

exports.movePlayer = function (ev) {
    var el = document.getElementById("kitten-" + ev.id);

    if (el) {
        el.style.left = ev.x + "px";
        el.style.top = ev.y + "px";
    }
};
