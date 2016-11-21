var http = require('http');
var handle = require('./modules/handler.js');

console.log('listening on localhost:8125');

http.createServer(handle.handleRequest).listen(8125, '127.0.0.1');
