var math = require('./modules/modules.js');
var fs = require('fs');

var parsedJSON = JSON.parse(fs.readFileSync("input.json"));

var name = modules.calculation(parsedJSON.a,parsedJSON.b,parsedJSON.б);

console.log(JSON.stringify(name, null, 2));
