var number = require('./input.json');
var export_solve = require('./modules/solve.js');
var result = export_solve.solve(number["a"], number["b"], number["c"]);
console.log(JSON.stringify(result, undefined, 1));
