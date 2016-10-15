var fs = require('fs');

var j = require('./input.json');
var x = 0, x1 = 0, x2 = 0, d = 0;
var n;
if (j["a"] == 0) {
	if (j["b"] == 0) {
		console.log("#");
	} else {
		x = (-j["c"]) / j["b"];
		if (x%1 != 0) {
			x = Number(x.toFixed(2));
		}
		n = {
			"x":x
		}
		console.log(JSON.stringify(n, undefined, 1));
	}
} else {
	d = Math.pow(j["b"], 2) - 4*j["a"]*j["c"];
	if (d > 0) {
		x1 = (-j["b"] + Math.sqrt(d)) / (2 * j["a"]);
		x2 = (-j["b"] - Math.sqrt(d)) / (2 * j["a"]);
		if (x1 > x2) {
			x2 = [x1, x1 = x2][0];
		}
		if (x1%1 != 0) {
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
		console.log(JSON.stringify(n, undefined, 1));
	}
	else {
		if (d == 0) {
			x = (-j["b"]) / (2 * j["a"]);
			if (x%1 != 0) {
				x = Number(x.toFixed(2));
			}
			if (d%1 != 0) {
				d = Number(d.toFixed(2));
			}
			n = {
				"x":x,
				"D":d
			}
			console.log(JSON.stringify(n, undefined, 1));
		} else {
			console.log("#");
		}
	}
}