const fs = require("fs");
const j = JSON.parse(fs.readFileSync("./input.json"));

if (j.a == 0)
{
	x = -j.c/j.b;
	if (x % 1 != 0)
		{
			x = (x.toFixed(2))/1;
		}
	output = {"x":x}
	console.log(JSON.stringify(output, undefined, 1));
}

else
{
	var D = (Math.pow(j.b, 2) - (4 * j.a * j.c));

	if (D > 0) {
		x1 = (-j.b - Math.sqrt(D)) / (2 * j.a);
		x2 = (-j.b + Math.sqrt(D)) / (2 * j.a);
		if (x1 % 1 != 0)
		{
			x1 = (x1.toFixed(2))/1;
		}
		if (x2 % 1 != 0)
		{
			x2 = (x2.toFixed(2))/1;
		}
		output = {"x1":x1, "x2":x2, "D":D}
		console.log(JSON.stringify(output, undefined, 1));
	}

	if (D == 0) {
		x1 = (-j.b) / (2 * j.a);
		x2 = (-j.b) / (2 * j.a);
		if (x1 % 1 != 0)
		{
			x1 = (x1.toFixed(2))/1;
		}
		if (x2 % 1 != 0)
		{
			x2 = (x2.toFixed(2))/1;
		}
		output = {"x1":x1, "x2":x2, "D":D}
		console.log(JSON.stringify(output, undefined, 1));
	}
}
