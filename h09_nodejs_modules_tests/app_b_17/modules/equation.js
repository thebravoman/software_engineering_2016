function checkForDouble (value) {
	if (value % 1 == 0) {
		return value;
	}
	
	return value.toFixed(2);
}

exports.solve = function (a, b, c) {
	
	var result = {};
	var x1 = 0, x2 = 0, x = 0, d = 0;
	
	if (a == 0) { 	
		if (b == 0) {	
			if (c == 0) {
				
			 	result.x = "Any";
			 	
			} else {
				
				result.x1 = "NaN";
				result.x2 = "NaN";
				
			}
		}
		
	} else { 
		
		d = Math.pow(b, 2) - 4 * a * c;
		
		if (d == 0) {
			x = -b / (2 * a);
			
			result.x = checkForDouble(x);
			
		} else if (d > 0) {
			x1 = (-b + Math.sqrt(d)) / (2 * a);
			x2 = (-b - Math.sqrt(d)) / (2 * a);
			
			result.x1 = checkForDouble(x1);
			result.x2 = checkForDouble(x2);
			
		} else { 
			
			result.x1 = "NaN";
			result.x2 = "NaN";
			
		}
	}
	
	return result;
};
