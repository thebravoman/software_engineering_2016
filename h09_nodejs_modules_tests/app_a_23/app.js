var solve = require('./modules/solve.js');
var fs = require('fs');
var json_none = require('./input/input-none.json');
var json_any = require('./input/input-any.json');
var json_one = require('./input/input-1.json');
var json_two = require('./input/input-2.json');

console.log(solve.quadratic(json_none["a"], json_none["b"], json_none["c"]));
console.log(solve.quadratic(json_any["a"], json_any["b"], json_any["c"]));
console.log(solve.quadratic(json_one["a"], json_one["b"], json_one["c"]));
console.log(solve.quadratic(json_two["a"], json_two["b"], json_two["c"]));
