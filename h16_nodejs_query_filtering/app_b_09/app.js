var http = require('http');
var url = require('url');

var handlerModule = require('./modules/handler.js');

const port = 8209;
const hostname = 'localhost';
console.log("listening on localhost: port -> ", port);
http.createServer(handlerModule.processGETRequest).listen(port, hostname);
