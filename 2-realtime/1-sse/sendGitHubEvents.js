"use strict";

var GitHubFirehose = require("github-firehose");

var firehose = new GitHubFirehose();
firehose.start();

module.exports = function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });

    firehose.on("event", function (event) {
        if (event.type === "PushEvent") {
            var login = "@" + event.actor.login;
            var commit = event.payload.head.substring(0, 5);
            var repo = event.repo.name;
            var commitDesc = event.payload.commits[0].message;

            res.write("data: " + login + " pushed " + commit + " to " + repo +
                      ": " + commitDesc + "\n\n");
        }
    });
};
