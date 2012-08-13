"use strict";

var fs = require("fs");
var path = require("path");
var url = require("url");
var request = require("request");

// https://npmjs.org/package/jsdom
var jsdom = require("jsdom");

// https://npmjs.org/package/canvas
var Canvas = require("canvas");

var jQuerySrc = fs.readFileSync(path.resolve(__dirname, "./jquery-1.8.0.js")).toString();

module.exports = function (body, docUrl, callback) {
    // Tell jsdom to parse the `body` text into a virtual DOM. Also, include jQuery.
    jsdom.env({ html: body, src: [jQuerySrc], done: function (errors, window) {
        // Once we have a `window` object, the fun begins!
        fixStylesheetUrls(window, docUrl);
        rotateImages(window, docUrl, callback);
    }});
};

function fixStylesheetUrls(window, baseUrl) {
    window.$("link").each(function (i, linkEl) {
        linkEl.href = url.resolve(baseUrl, linkEl.href);
    });
}

function rotateImages(window, baseUrl, callback) {
    var $imgs = window.$("img");

    var imgsSoFar = 0;
    function doneWithImage() {
        if (++imgsSoFar === $imgs.length) {
            callback(null, "<!DOCTYPE html>" + window.document.documentElement.outerHTML);
        }
    }

    // Loop through all the images in the document.
    $imgs.each(function (i, imgEl) {
        // Find the image's full URL.
        var imgUrl = url.resolve(baseUrl, imgEl.src);

        // Go grab the image using `request`...
        request(imgUrl, { encoding: null }, function (error, imgRes, imgBuffer) {
            // And rotate it!
            rotateImage(imgBuffer, imgEl);
            doneWithImage();
        });
    });
}

function rotateImage(imgBuffer, imgEl) {
    // Turn the image buffer into something the canvas can work with.
    var img = new Canvas.Image();
    img.src = imgBuffer;

    if (img.width === 0 || img.height === 0) {
        // Image is invalid; bail out.
        return;
    }

    // Create a canvas with a bit of extra room for the rotation to happen
    var canvas = new Canvas(img.width, img.height);
    var ctx = canvas.getContext("2d");

    // Do the funky translate-then-rotate-then-translate-back dance.
    ctx.translate(img.width / 2, img.height / 2);
    ctx.rotate(Math.PI);
    ctx.translate(-img.width / 2, -img.height / 2);

    // Draw the image onto our rotated canvas.
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Store the contents of the canvas back in the original <img> element.
    imgEl.src = canvas.toDataURL();
}
