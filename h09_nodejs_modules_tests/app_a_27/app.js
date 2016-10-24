var mod = require('./Modules/solve.js');
var fs = require('fs');

var json = require('./input.json');

console.log(mod.solve_quadratic(json.a, json.b, json.c));
