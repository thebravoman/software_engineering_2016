var http = require('http');
var url = require('url');
var Request_Handler = require('./modules/handler.js');

const port = 8209;
const hostname = 'localhost';

http.createServer(Request_Handler.proccessGETRequest).listen(port, hostname);
