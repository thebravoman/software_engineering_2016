exports.fujeclypse = function(a, b, c){

	var D = ((b*b) - (4*a*c));
	var output = {};
	if (a == 0 && b == 0 && c == 0){
		output.x = "Any";
	}
	else{
		if (D > 0){
			var x1 = (-b - Math.sqrt(D)) / (2*a);
			var x2 = (-b + Math.sqrt(D)) / (2*a);
			output.x1 = (x1).toFixed(2)/1;
			output.x2 = (x2).toFixed(2)/1;
		}
	
		
		if (D == 0)
		{
			var x = (-b)/(2*a);
			output.x = (x).toFixed(2)/1;
		}
		
		if (D < 0){
			output.x1 = NaN;
			output.x2 = NaN;		
		}
	
		
	}
	return output;
}

	
