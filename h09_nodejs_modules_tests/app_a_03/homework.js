var dis= require('./modules/Dis.js');
var fs = require('fs');
var q=require('./input.json');
var a=q["a"], b=q["b"], c=q["c"];
console.log(JSON.stringify(dis.solve(a,b,c),"\n",1));
