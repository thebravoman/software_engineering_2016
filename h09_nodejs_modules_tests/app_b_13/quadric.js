var quad = require('./module/quad.js');

var fs = require('fs');

var input = require('./input.json');

var output={};

output=quad.solve(input.a,input.b,input.c);

console.log(JSON.stringify(output,null,2));

