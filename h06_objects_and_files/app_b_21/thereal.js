var fs = require('fs');
var D;
var path = "imput.json";

if (fs.existsSync(path))
{
	var packageJSON = JSON.parse(fs.readFileSync(path));
}
D = packageJSON.b * packageJSON.b  - (4 * packageJSON.a * packageJSON.c );
if(D < 0)
{
	console.log("");
}else 
{
var x1 = (-packageJSON.b + (Math.sqrt(D))) / (2 * packageJSON.a);
var x2 = (-packageJSON.b - (Math.sqrt(D))) / (2 * packageJSON.a);

delete packageJSON.a;
delete packageJSON.b;
delete packageJSON.c;

packageJSON.x1 = +x1.toFixed(2);
packageJSON.x2 = +x2.toFixed(2);
packageJSON.D = D;	
console.log( JSON.stringify(packageJSON , null, 2));
}