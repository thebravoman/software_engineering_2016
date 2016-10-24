var math = require('./modules/modules.js');
var fs = require('fs');

var file = "input.json";
var packageJSON = JSON.parse(fs.readFileSync(file));

var name = modules.calculation(packageJSON.a,packageJSON.b,packageJSON.б);

console.log(JSON.stringify(name, null, 2));