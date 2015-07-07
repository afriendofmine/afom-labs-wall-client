# AFOM Labs - Wall Client

Connect with the AFOM Labs Wall Server to control the devices wall.
Supports require.js, browserify and plain js.


## Getting Started


#### With require.js
Define socket.io-client in the shim
```javascript
shim stuff
```


#### With browserify
Just make sure browserify is installed in your project
```javascript
npm install --save socket.io-client
```


#### With reguar js
Make sure `socket.io-client` is included before `labs-wall-client.js`
```javascript
	<script>Other Code</script>
	<script src="https://cdn.socket.io/socket.io-1.3.5.js"></script>
	<script src="labs-wall-client.js"></script>
	<script>Other Code</script>
```