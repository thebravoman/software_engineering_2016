var fs = require("fs");

var contents = fs.readFileSync("input.json");

var json = JSON.parse(contents);

function printJSON(output) {
	console.log(JSON.stringify(output, undefined, 1));
}

function isInteger(value) {
	if ((undefined === value) || (null === value)) {
		return false;
	}
	return value % 1 == 0;
}

function quadratic(a, b, c) {
	if (a == 0) {
		if (b == 0 && c == 0) {
			output = {
				"x" : "Every value is viable"
			};
			printJSON(output);
		} else {
			var D = (Math.pow(b, 2) - 4 * a * c);
			var x = (-c / b);
			if (isInteger(x) == false) {
				x = x.toFixed(2) / 1;
			}
			var output = {
				"x" : x,
				"D" : D
			};
			printJSON(output);
		}
	} else {
		var D = (Math.pow(b, 2) - 4 * a * c);

		if (D > 0) {
			var x1 = ((-b + Math.sqrt(D)) / (2 * a));
			var x2 = ((-b - Math.sqrt(D)) / (2 * a));

			if (isInteger(x1) == false) {
				x1 = x1.toFixed(2) / 1;
			}
			if (isInteger(x2) == false) {
				x2 = x2.toFixed(2) / 1;
			}

			output = {
				"x1" : x1,
				"x2" : x2,
				"D" : D
			};
			printJSON(output);
		}

		if (D == 0) {
			var only_x = (-b) / (2 * a);
			if (isInteger(only_x) == false) {
				only_x = only_x.toFixed(2) / 1;
			}

			output = {
				"x" : only_x,
				"D" : D
			};
			printJSON(output);
		}

		if (D < 0) {
			output = {
				"x" : "No possible value",
				"D" : D
			};
			printJSON(output);
		}

	}
}

quadratic(json.a, json.b, json.c);