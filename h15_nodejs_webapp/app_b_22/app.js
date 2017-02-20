var http = require('http');
var url = require('url');
var requestHandler = require('./modules/module.js');
http.createServer(requestHandler.requestHandler).listen(8222, 'localhost');
