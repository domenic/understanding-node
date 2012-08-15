# Course Description

Node.js is an exciting new platform for building web applications in JavaScript. With its unique I/O model, it excels at the sort of scalable and real-time situations we are increasingly demanding of our servers. And the ability to use JavaScript for both the client and server opens up many possibilities for code sharing, expertise reuse, and rapid development.

This class is intended for those with some basic knowledge of JavaScript, interested in an introduction to the Node.js ecosystem and development platform. We'll discuss how to get started with Node, and why you would want to. We'll then explore Node's module and package system, demononstrating several of the more popular and impressive packages that exemplify the type of tasks Node excels at. These include low-level HTTP streaming with the http module, high-level bidirectional websocket communication with socket.io, and server-browser code sharing with browserify, jsdom, and node-canvas.

[Event page](http://www.eventbrite.com/event/3850777780)

## Links

Most of these were mentioned during the class or in the discussion afterward.

* [Node.js website](http://nodejs.org): go here to download and install Node
* [Nodejitsu](http://nodejitsu.com): a great service for very easily deploying your Node code to the cloud.
  - [Kitten Game](http://kitten-game.jit.su/): the kitten game (with websockets) has been deployed to Nodejitsu. It also
    has homework!
* [Node.js tag wiki on StackOverflow](http://stackoverflow.com/tags/node.js/info): has a lot of good links for further
  reading, including to several full-length books (some free).
* [NYC Node.js meetup](http://www.meetup.com/nodejs/)
* Packages used in the demos:
  - [request](https://npmjs.org/package/request) ([GitHub](https://github.com/mikeal/request)): a highly-capable helper
    for making HTTP requests, including easy piping, buffering, and callbacks.
  - [ecstatic](https://npmjs.org/package/ecstatic) ([GitHub](https://github.com/jesusabdullah/node-ecstatic)): a simple
    static file server you can plug into the basic Node HTTP server, as in the demos, or into higher-level frameworks
    like express or flatiron.
  - [github-firehose](https://npmjs.org/package/github-firehose)
    ([GitHub](https://github.com/hootware/github-firehose-node)): a small little package transforming the
    [GitHub events API](http://developer.github.com/v3/events/) into a
    [`EventEmitter`](http://nodejs.org/docs/latest/api/events.html). The source code is good reading!
  - [socket.io](http://socket.io/) ([npm](https://npmjs.org/package/socket.io),
    [GitHub](https://github.com/LearnBoost/socket.io)): a very high-level web sockets abstraction for bidirectional
    communication among multiple clients and your server.
  - [browserify](https://npmjs.org/package/browserify) ([GitHub](https://github.com/substack/node-browserify)): performs
    “compilation” of Node-style modules and packages into browser-ready bundles.
  - [jsdom](https://npmjs.org/package/jsdom) ([GitHub](https://github.com/tmpvar/jsdom)): a virtual DOM on the
    server-side.
  - [canvas](https://github.com/learnboost/node-canvas): an implementation of the HTML5 canvas API on the server.
* Packages discussed or otherwise recommended:
  - [express](http://expressjs.com/) ([npm](https://npmjs.org/package/express),
    [GitHub](https://github.com/visionmedia/express)): the most popular higher-level framework for writing websites.
    Gives you thinks like views and routing, as well as the basics like caching or redirection.
  - [restify](http://mcavage.github.com/node-restify/) ([npm](https://npmjs.org/package/restify),
    [GitHub](https://github.com/mcavage/node-restify)): a higher-level framework for writing RESTful APIs, inspired by
    express.
  - [mongoose](http://mongoosejs.com/) ([npm](https://npmjs.org/package/mongoose),
     [GitHub](https://github.com/LearnBoost/mongoose)): a client for a MongoDB that will map your models to your
     database.
  - [q](https://npmjs.org/package/q) ([GitHub](https://github.com/kriskowal/q)): implements the
     [promise](http://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
     abstraction in Node, which *in my opinion* is the best solution for handling asynchronous operations, and
     especially asynchronous errors.
* Packages for unit testing:
  - [mocha](http://visionmedia.github.com/mocha/) ([npm](https://npmjs.org/package/mocha),
    [GitHub](https://github.com/visionmedia/mocha)): a very modern, well-maintained, and flexible test runner.
  - [chai](https://github.com/visionmedia/mocha) ([npm](https://npmjs.org/package/chai),
    [GitHub](https://github.com/chaijs/chai)): a great assertion library for fluent assertions. Extensible with lots of
    [plugins](http://chaijs.com/plugins).
  - [sinon](http://sinonjs.org/) ([npm](https://npmjs.org/package/sinon),
    [GitHub](https://github.com/cjohansen/Sinon.JS)): a spy/stub/mock library. Pair with Chai and
    [Sinon–Chai](https://npmjs.org/package/sinon-chai) for good times!

## A Small Plug

I'm giving
[a talk on unit testing at my HTML5 App Developers meetup](http://www.meetup.com/html5-app-developers/events/76194782/)
next Monday! You should come.
