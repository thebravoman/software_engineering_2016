var http = require('http');
var url = require('url');
var requestHandler = require('./modules/Handler.js');

http.createServer(requestHandler.Handler).listen(8224, 'localhost');
