var fs = require('fs');
var solve = require('./modules/solve.js');
var out = {};


var any = require('./input/input-any.json');
var one = require('./input/input-1.json');
var two = require('./input/input-2.json');
var nan = require('./input/input-nan.json');

out=JSON.stringify(solve.solve(any.a, any.b, any.c),"\n",1);
console.log(out);
out=JSON.stringify(solve.solve(one.a, one.b, one.c),"\n",1);
console.log(out);
out=JSON.stringify(solve.solve(two.a, two.b, two.c),"\n",1);
console.log(out);
out=JSON.stringify(solve.solve(nan.a, nan.b, nan.c),"\n",1);
console.log(out);
