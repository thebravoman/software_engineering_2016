var http = require('http');
var url = require('url');
var requestHandler = require('./modules/handler.js');

http.createServer(requestHandler.requestHandler).listen(8223, 'localhost');
