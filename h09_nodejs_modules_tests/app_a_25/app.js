var fs = require('fs');

var solve = require('./modules/solve.js');
var none = require('./input/input-none.json');
var any = require('./input/input-any.json');
var one = require('./input/input-1.json');
var two = require('./input/input-2.json');

console.log(solve.quadratic(one["a"], one["b"], one["c"]));
console.log(solve.quadratic(two["a"], two["b"], two["c"]));
console.log(solve.quadratic(none["a"], none["b"], none["c"]));
console.log(solve.quadratic(any["a"], any["b"], any["c"]));

