var fs = require("fs");

var contents = fs.readFileSync('input.json');

var json = JSON.parse(contents);

var solve = require('./Modules/program.js');


var a = json.a;
var b = json.b;
var c = json.c;

output = solve.solve(a, b, c);

console.log(JSON.stringify(output, undefined, 1));
