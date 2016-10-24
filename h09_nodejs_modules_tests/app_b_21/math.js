/**
 * http://usejsdoc.org/
 */
var fs = require('fs');
var path = "imput.json";
var quad = require('./modules/func.js');
if (fs.existsSync(path))
{
	var  Val_file = JSON.parse(fs.readFileSync(path));
}
console.log(quad.solve(Val_file.a, Val_file.b, Val_file.c));