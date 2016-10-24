var result = require('../Modules/solve.js');
var fs = require('fs');

var json_one_root = require('../Test/input_1.json');
var json_two_roots = require('../Test/input_2.json');
var json_any = require('../Test/input_any.json');
var json_no = require('../Test/input_no.json');

console.log = (result.solve_quadratic(json_one_root.a,json_one_root.b,json_one_root.c));
console.log = (result.solve_quadratic(json_two_roots.a,json_two_roots.b,json_two_roots.c));
console.log = (result.solve_quadratic(json_any.a,json_any.b,json_any.c));
console.log = (result.solve_quadratic(json_no.a,json_no.b,json_no.c));
