var fs = require("fs");

var contents = fs.readFileSync("input.json");

var json = JSON.parse(contents);

var solve = require('./modules/solve.js');

var output;

output = solve.solve(json.a, json.b, json.c);

solve.print(output);
