var mod = require('./Modules/solve.js');
var fs = require('fs');

var json = require('./input.json');

var result = mod.solve_quadratic(json.a, json.b, json.c)

console.log(JSON.stringify(result, undefined, 1));
