var mod = require('./Modules/solve.js');
var fs = require('fs');

var json_any = require('./Input_Json/input-any.json');
var json_one = require('./Input_Json/input-1.json');
var json_two = require('./Input_Json/input-2.json');
var json_nan = require('./Input_Json/input-nan.json');

console.log(mod.solve_quadratic(json_any.a, json_any.b, json_any.c));
console.log(mod.solve_quadratic(json_one.a, json_one.b, json_one.c));
console.log(mod.solve_quadratic(json_two.a, json_two.b, json_two.c));
console.log(mod.solve_quadratic(json_nan.a, json_nan.b, json_nan.c));
