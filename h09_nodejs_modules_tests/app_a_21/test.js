var fs = require("fs");

var solve = require('./Modules/program.js');

var input = require("./input.json");

var a, b, c = input["a"], input["b"], input[c];

output = solve.solve(a, b, c);

console.log(JSON.stringify(output, undefined, 1));