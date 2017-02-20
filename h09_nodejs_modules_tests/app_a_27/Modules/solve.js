exports.solve_quadratic = function(a, b, c){
	var x, x1, x2, D;
	var result = {};
	
	if(a == 0){
		if(b == 0 && c == 0) {
			result = {
						"x" : "Any"
					 };
			
			return result;
			
		} else {
			x = -c / b;
			x = convert(x);
			
			result = {
						"x" : x
					 };
			
			return result;
		}
	} else {
		D = ((Math.pow(b , 2)) - (4 * a * c ));
		
		if(D == 0){
			x = -b / (2 * a);
			x = convert(x);
			
			result = {
						"x" : x
					 };
			
			return result;
		}	
		
		if(D > 0){
			x1 = (-b + Math.sqrt(D)) / (2 * a);
			x2 = (-b - Math.sqrt(D)) / (2 * a);
				
			x1 = convert(x1);
			x2 = convert(x2);
				
			result = {
						"x1" : x1, 
						"x2" : x2
					 };
				
			return result;
		} else {
				result = {"x1" : "NAN", "x2" : "NAN"};
				
				return result;
		}
	}
}

function convert(number) {
	if (number % 1 != 0) {
		return (number.toFixed(2));
	}
	else {
		return number;
	}
}