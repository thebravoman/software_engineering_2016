var http = require('http');
var url = require('url');
var solver = require('./modules/solver');

var input = require('./input.json');

var json_result = solver.solve(input.a, input.b, input.c);
console.log(JSON.stringify(json_result));
