var modules = require('./modules/functions.js');

var input = require('./input.json');

var printData = modules.solveMyProblem(input.a, input.b, input.c);

console.log(JSON.stringify(printData, null, 1));
