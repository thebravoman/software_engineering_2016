var solver = require('./modules/quadratic_solver.js');
var fs = require('fs');
var input = require('./input.json');

var a=input["a"];
var b=input["b"];
var c=input["c"];

console.log(JSON.stringify(solver.quadratic_solver(a,b,c), "\n", 1));