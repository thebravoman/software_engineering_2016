var quadratic = require('./modules/solve_quadratic.js');
var args = process.argv.slice(2);
console.log(quadratic.solve(args[0], args[1], args[2]));
