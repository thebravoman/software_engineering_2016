var fs = require('fs');

var contents = fs.readFileSync('input.json', 'utf8');
var object =  JSON.parse(contents);

var solve = require ('./modules/solve');


var result = solve.solve(object.a, object.b, object.c);

result = JSON.stringify(result, undefined, 1);

console.log(result);