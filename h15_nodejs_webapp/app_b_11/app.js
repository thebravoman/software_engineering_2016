var http = require('http');
var url = require('url');
var getRequest = require('./modules/handler.js');
const PORT = 8211;
const HOST = '127.0.0.1';

var server = http.createServer(getRequest.requestHandler);

server.listen(PORT, HOST);
//console.log('Server is listening on ' + HOST + ':' + PORT);
