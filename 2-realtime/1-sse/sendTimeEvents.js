"use strict";

module.exports = function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });

    setInterval(function () {
        res.write("data: The time is: " + Date.now() + "\n\n");
    }, 2000);

    // Never call `res.end()`!
};
