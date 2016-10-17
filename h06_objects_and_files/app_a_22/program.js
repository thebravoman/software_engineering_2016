const file = require('fs');
const input = JSON.parse(file.readFileSync("./input.json"));

var x1 = Null;
var x2 = Null;
var D;

if(input.a != 0) {
	if(input.b != 0) { 
		if(input.c != 0) { 
			D = Number.((input.b * input.b) - (4 * input.a * input.c).toFixed(2));
			if(D > 0) {
				x1 = Number(((-input.b + Math.sqrt(D))/(input.a*2)).toFixed(2));
				x2 = Number(((-input.b - Math.sqrt(D))/(input.a*2)).toFixed(2));
			}
			if(D == 0) {
				x1 = x2 = Number(-(input.c / input.b).toFixed(2));
			}
		}
		else {
			x1 = 0;
			x2 = Number(-(input.b / input.a).toFixed(2));
		}
	}
	else { 
		x1 = Number(+Math.sqrt(-(input.c / input.a)).toFixed(2));
		x2 = Number(-Math.sqrt(-(input.c / input.a)).toFixed(2));
	}
}
else { 
	x1 = x2 = Number(-(input.b / input.a).toFixed(2));
}

var result;

result =
{
"x1":x1,
"x2":x2,
"D":D
}

console.log(JSON.stringify(result, undefined, 1));
