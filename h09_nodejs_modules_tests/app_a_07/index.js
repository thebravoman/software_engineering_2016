const solver = require('./modules/solver').quadratic;

console.log(JSON.stringify(solver(1, 2, 3), null, 4));
console.log(JSON.stringify(solver(0, 0, 0), null, 4));
console.log(JSON.stringify(solver(0, 5, 3), null, 4));
console.log(JSON.stringify(solver(1, -4, 3), null, 4));
