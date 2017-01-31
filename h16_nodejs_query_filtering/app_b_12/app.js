var http = require('http');
var url = require('url');
var handlerModule = require('./modules/handler.js');

http.createServer(handlerModule.processGETRequest).listen(8212, 'localhost');
