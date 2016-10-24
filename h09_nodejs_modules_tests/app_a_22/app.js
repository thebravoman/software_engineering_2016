var result = { };
var file = require('fs');
var values = file.readFileSync('./input.json','utf8');
var file_json = JSON.parse(values);
var solve = require('./modules/solve.js');

result = solve.solve(file_json.a, file_json.b, file_json.c);

console.log(JSON.stringify(result, undefined, 1));