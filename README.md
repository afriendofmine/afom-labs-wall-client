# AFOM Labs - Wall Client

Connect with the AFOM Labs Wall Server to be controled as a device on the devices wall.<br>
It supports require.js, browserify and plain js.


## Getting Started


#### With require.js
Define socket.io-client in require.js and require `afom-labs-wall-client`(will be described soon)
```javascript

```


#### With browserify
Make sure `afom-labs-wall-client` and `socket.io-client` are added to your project
```javascript
npm install --save socket.io-client
npm install --save afom-labs-wall-client
```

In your file you only have to add the following code
```
require('afom-labs-wall-client');
```


#### With reguar js
Make sure `socket.io-client` is included _before_ `labs-wall-client.js`
```javascript
<script>Other Code</script>
<script src="https://cdn.socket.io/socket.io-1.3.5.js"></script>
<script src="http://wall.afriendofmine.nl/js/afom-labs-wall-client.js"></script>
<script>Other Code</script>
```