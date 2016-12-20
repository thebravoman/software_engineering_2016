
var url = require('url');
var http = require('http');

var req_handlr = require('./modules/handler.js');

const port = 8206;
const hostname = 'localhost';
http.createServer(req_handlr.proccessGETRequest).listen(port, hostname);
