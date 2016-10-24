exports.print = function(output) {
	console.log(JSON.stringify(output, undefined, 1));
}

function isInteger(value) {
	if ((undefined === value) || (null === value)) {
		return false;
	}
	return value % 1 == 0;
}

function findDiscriminant(a, b, c)
{
	var D = (Math.pow(b, 2) - 4 * a * c);
	
	return D;
}

exports.solve = function(a, b, c)
{
	var output = {};
	if (a == 0) {
		if (b == 0 && c == 0) {
			output = {
				"x" : "Any"
			};
			return output;
		} else {
			var D = (Math.pow(b, 2) - 4 * a * c);
			var x = (-c / b);
			if (isInteger(x) == false) {
				x = x.toFixed(2) / 1;
			}
			output = {
				"x" : x
			};
			return output;
		}
	} else {
		var D = findDiscriminant(a, b, c);

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
				"x2" : x2
			};
			return output;
		}

		if (D == 0) {
			var only_x = (-b) / (2 * a);
			if (isInteger(only_x) == false) {
				only_x = only_x.toFixed(2) / 1;
			}

			output = {
				"x" : only_x
			};
			return output;
		}

		if (D < 0) {
			output = {
				"x1" : "NaN",
				"x2" : "NaN"
			};
			return output;
		}

	}
}