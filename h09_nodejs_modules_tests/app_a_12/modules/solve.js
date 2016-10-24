exports.solve = function(a, b, c){
	var result = {};	
	if(a == 0) {
		if(b == 0 && c == 0) {
			result.x = "Any";
		} else {
			var x = (-c/b);
			
				result.x = x.toFixed(2);
			}
			
		} else {
		var d = b*b - 4*a*c;
		if(d > 0){
			var x1 = (-b + Math.sqrt(d))/(2*a);
			var x2 = (-b - Math.sqrt(d))/(2*a);
		
			result.x1 = x1.toFixed(2);
			result.x2 = x2.toFixed(2);
			
		} else if (d == 0){
			var x3 = (-b/2*a);
			
			result.x = x3.toFixed(2);
		} else if (d < 0) {
			result.x1 = "NaN";
			result.x2 = "NaN";
		}
	}
		
		return result;
}


