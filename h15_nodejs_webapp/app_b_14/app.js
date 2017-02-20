var http = require('http');
var url = require('url');
var requestHandler = require('./modules/Handler.js');

http.createServer(requestHandler.requestHandler).listen(8214, 'localhost');
