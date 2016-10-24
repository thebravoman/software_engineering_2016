function fix(num) {
	if (num % 1 != 0) return num.toFixed(2);
	else return num;
}

exports.solve = function(a, b, c) {
	var result = {};
	var D = b*b + 4*a*c;

	if (a == 0) {
		if (b == 0 && c == 0) {
			result.x = "Any";
			console.log(JSON.stringify(result));
			return;
		}
		else if (b != 0) {
			result.x = fix((- c) / b); 
		}
	} 
	else {
		if (D < 0) {
			result.x1 = "NaN";
			result.x2 = "NaN";
		}
		 else if(D == 0){
			var x = (- b) / (2 * a);

			result.x = fix(x); 
		
		} 
		else {
			var x1 = (- b - Math.sqrt(D)) / (2 * a);
			var x2 = (- b + Math.sqrt(D)) / (2 * a);
		
			result.x1 = fix(x1);
			result.x2 = fix(x2);

			
		}
	}

	console.log(JSON.stringify(result, null, 2));
};
