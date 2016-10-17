var fs = require("fs");
var file = "input.json";
<<<<<<< HEAD
var packageJSON = JSON.parse(fs.readFileSync(file));
=======
var packageJSON = packageJSON = JSON.parse(fs.readFileSync(file));
>>>>>>> c68384ec23b96a307dd62eb191c06bd9d6c2c2ea
var A = packageJSON.a;
var B = packageJSON.b;
var C = packageJSON.c;
var D = 0;
var x1 = 0;
var x2 = 0
D = B * B  - (4 * A * C );
if(D < 0) console.log("");
else if (D > 0)
{
	x1 = (-B + (Math.sqrt(D))) / (2 * A);
	x2 = (-B - (Math.sqrt(D))) / (2 * A);
	delete packageJSON.a;
	delete packageJSON.b;
	delete packageJSON.c;
	packageJSON.x1 = +x1.toFixed(2);
	packageJSON.x2 = +x2.toFixed(2);
	packageJSON.D = D;
	console.log( JSON.stringify(packageJSON , null, 2));
}
else if (D == 0)
{
	x1 = -B / (2 * A);
	x2 = -B / (2 * A);
	delete packageJSON.a;
	delete packageJSON.b;
	delete packageJSON.c;
	packageJSON.x1 = +x1.toFixed(2);
	packageJSON.x2 = +x2.toFixed(2);
	packageJSON.D = D;
	console.log( JSON.stringify(packageJSON , null, 2));
}
