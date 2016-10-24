var dis= require('./modules/Dis.js');
var fs = require('fs');
var q=require('./input.json');
var a=q["a"], b=q["b"], c=q["c"];
console.log(dis.solve(a,b,c));
