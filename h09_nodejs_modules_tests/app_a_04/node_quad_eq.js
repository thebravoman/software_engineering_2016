var module = require('./modules/math.js');
var fs = require('fs');
var input = require('./input.json');
var a = fs["a"], fs["b"], fs["c"];

console.log(JSON.stringify(math.quad_solve(a,b,c),"\n",1));
