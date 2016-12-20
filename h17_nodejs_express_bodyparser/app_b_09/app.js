var express = require('express');
var path = require('path');
var index = require('./routes/index');
var http = require('http');

var app = express();

app.use('/', index);

const port = 8209;
const hostname = 'localhost';

console.log('Listening on localhost -> port ' + port);
http.createServer(app).listen(port, hostname);