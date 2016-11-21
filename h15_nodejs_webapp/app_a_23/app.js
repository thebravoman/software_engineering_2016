var http = require('http');
var port = 8123;
var handle = require('./modules/handler.js');

console.log('listening on localhost:' + port);

http.createServer(handle.handleRequest).listen(port, '127.0.0.1');
