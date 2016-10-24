exports.quadratic = function(a, b, c) {
	
	var a,b,c,D = Math.pow(b, 2)- (4*a*c);
	var result = {};
	sqrt_D = Math.sqrt(D);
		if(a == 0 && b == 0 && c == 0) {
				result = {
						"x": "Any";
				}
			return result;
		}
		if(D > 0) {
			x1 = (-b + sqrt_D) / (2*a);
			x2 = (-b - sqrt_D) / (2*a);
			
				if(x1%1 != 0) {
						x1 = Number(x1.toFixed(2));
					}
				if(x2%1 !=0) {
						x2 = Number(x2.toFixed(2));
				}
				result = {
						"x1":x1;
						"x2":x2;
				};
			return result;
		}
				if(D == 0) {
					x1 = (-b) / (2*a);
					if(x1%1 != 0) {
						x1 = Number(x1.toFixed(2));
					}
					result = {
						"x":x1;
					};	
					return result;
				}
				if(D < 0) {
					result = {
						"x1":NaN;
						"x2":NaN;
					};
					return result;
				}

}