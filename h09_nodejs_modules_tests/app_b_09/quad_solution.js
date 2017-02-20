var module = require('./modules/modules.js');

var input_file = require('./input.json');

console.log(JSON.stringify(module.solve(input_file.a, input_file.b, input_file.c), null, 2));