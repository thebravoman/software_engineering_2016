function discriminant(a, b, c) {
	return Math.pow(b, 2) - 4 * a * c;
}

function format_result(result) {
	console.log(JSON.stringify(result, null, 2));
}

function is_integer(number) {
	if (number % 1 == 0) return number;
	else return number.toFixed(2);
}


exports.solve = function(a, b, c) {
	
	var result = {};

	if (a == 0) {
		
		if (b == 0 && c == 0) {
			result.x = "Any";
			console.log(JSON.stringify(result));
			return;
		}

		else if (b != 0) {
			result.x = is_integer((- c) / b); 
		}
	} else {

		var D = discriminant(a, b, c);

		if (D > 0) {

			var x1 = (- b + Math.sqrt(D)) / (2 * a);
			var x2 = (- b - Math.sqrt(D)) / (2 * a);
		
			result.x1 = is_integer(x1);
			result.x2 = is_integer(x2);

		} else if(D == 0) {

			var x = (- b) / (2 * a);

			result.x = is_integer(x); 
		
		} else {

			result.x1 = "NaN";
			result.x2 = "NaN";
		
		}
	}

	format_result(result);
};