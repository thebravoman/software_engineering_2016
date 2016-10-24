var fs = require("fs");
var output = {};

var input = require("./input.json"); 

var solve = require('./Modules/program.js');

var json = JSON.parse(solve);

output = solve.solve(json.a, json.b, json.c);

console.log(JSON.stringify(output, undefined, 1));
