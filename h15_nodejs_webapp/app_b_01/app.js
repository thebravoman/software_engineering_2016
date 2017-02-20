var http = require('http');
var url = require('url');
var request_handler = require('./modules/handler.js');

http.createServer(request_handler.request_handler).listen(8201, 'localhost');
