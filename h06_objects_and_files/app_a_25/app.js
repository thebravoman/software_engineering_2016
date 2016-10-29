var fs = require('fs');
var input = require('./input.json');
var x = 0, x1 = 0, x2 = 0, d = 0, n;

if (input["a"] == 0) {
	if (input["b"] == 0) {
		n = { "x":"Every x" }
	} else {
		x = (-input["c"]) / input["b"];
		if (x % 1 != 0) {
			x = Number(x.toFixed(2));
		}
		n = { "x":x }
	}
} else {
	d = Math.pow(input["b"], 2) - 4*input["a"]*input["c"];
	if (d > 0) {
		x1 = (-input["b"] + Math.sqrt(d)) / (2 * input["a"]);
		x2 = (-input["b"] - Math.sqrt(d)) / (2 * input["a"]);
		if (x1 > x2) {
			x2 = [x1, x1 = x2][0];
		}
		if (x1 % 1 != 0) {
			x1 = Number(x1.toFixed(2));
		}
		if (x2%1 != 0) {
			x2 = Number(x2.toFixed(2));
		}
		if (d%1 != 0) {
			d = Number(d.toFixed(2));
		}
		n = {
			"x1":x1,
			"x2":x2,
			"D":d
		}
	} else {
		if (d == 0) {
			x = (-input["b"]) / (2 * input["a"]);
			if (x % 1 != 0) {
				x = Number(x.toFixed(2));
			}
			n = { "x":x }
		} else {
			n = { "x":"No x found" }
		}
	}
}
console.log(JSON.stringify(n, undefined, 1));
