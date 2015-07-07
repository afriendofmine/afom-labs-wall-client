(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['socket.io-client'], factory)
  } else if ( typeof module === "object" && typeof module.exports === "object" ) {
    var socket = require('socket.io-client');
    factory(socket);
  } else {
    factory(root.io);
  }

})(window, function(io) {

  var AFOMwall = function() {
    var socket = io('http://wall.afriendofmine.nl');

    socket.on('url', function(url) {
        return window.location.assign(url);
    });
    }
  }

  AFOMwall.prototype = {};

  return AFOMwall;

});
