var module = require("../modules/quadratic.js");

exports.solve = function(a, b, c){
	var D = Math.pow(b, 2) - 4 * a * c;
	var output = {};
	
	if(a != 0){
		if(D > 0){
			output.x1 = parseFloat(((-b + Math.sqrt(D)) / (2 * a)).toFixed(2));
			output.x2 = parseFloat(((-b - Math.sqrt(D)) / (2 * a)).toFixed(2));
		} else if (D == 0){
			output.x = parseFloat((-b/ (2 * a)).toFixed(2));
		} else {
			output.x1 = "NaN";
			output.x2 = "NaN";
		}
	} else {
		if(b != 0){
			output.x = parseFloat((-c / b).toFixed(2));
		} else if(b == 0 && c == 0){
			output.x = "Any";
		} else{
			output.x1 = "NaN";
			output.x2 = "NaN";
		}
	}
	
	return output;
}


			
