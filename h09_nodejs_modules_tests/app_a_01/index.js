var fs = require('fs');
var quadratic = require('./modules/quadratic_AGAIN.js');

function output(input){
  console.log(quadratic.solve(input["a"],input["b"],input["c"]));
  }

var content_1 = ('./input/input-1.json');
var content_2 = ('./input/input-2.json');
var content_NaN = ('./input/input-NaN.json');
var content_any = ('./input/input-any.json');

output(content_1);
output(content_2);
output(content_NaN);
output(content_any);
