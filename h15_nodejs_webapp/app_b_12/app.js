var http = require('http');
var url = require('url');
var Request_Handler = require('./modules/handler.js');

http.createServer(Request_Handler.proccessGETRequest).listen(8212, 'localhost');
