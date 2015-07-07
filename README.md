# AFOM Labs - Wall Client

Connect with the AFOM Labs Wall Server to control the devices wall.<br>
It supports require.js, browserify and plain js.


## Getting Started


#### With require.js
Define socket.io-client in require.js (will be described soon)
```javascript

```


#### With browserify
Make sure `afom-labs-wall-client` and `socket.io-client` are added to your project
```javascript
npm install --save afom-labs-wall-client
npm install --save socket.io-client
```

In your file you only have to add the following code
```
require('afom-labs-wall-client');

```


#### With reguar js
Make sure `socket.io-client` is included before `labs-wall-client.js`
```javascript
<script>Other Code</script>
<script src="https://cdn.socket.io/socket.io-1.3.5.js"></script>
<script src="labs-wall-client.js"></script>
<script>Other Code</script>
```