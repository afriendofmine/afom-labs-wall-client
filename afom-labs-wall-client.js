(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['socket.io-client'], factory);
  } else if ( typeof module === "object" && typeof module.exports === "object" ) {
    var socket = require('socket.io-client');
    factory(socket);
  } else {
    factory(root.io);
  }

})(window, function(io) {

  // Connect with the friend of mine wall server
  var socket = io('http://wall.afriendofmine.nl');
  
  // Tell the server this is a device
  socket.emit('device');

  // Listen for incomming url to navigate to
  socket.on('url', function(url) {
    window.location.assign(url);
  });

});
