function checkIfDouble(x) {
	if(x % 1 !== 0) {
		return Number(x.toFixed(2));
	}
	else {
		return x;
	}
}

exports.solve = function(a, b, c) {
	var returnData = {};
	var D = 0;
	var x;
	var x1;
	var x2;
	
	if(a === 0) {
		if(b !== 0) 
		{
			x = -c / b;
			returnData.x = checkIfDouble(x);
			returnData.D = checkIfDouble(D);
		}

		else if(b === 0 && c === 0){
			returnData.x = "Any";
			returnData.D = checkIfDouble(D);
		}

		else if(b === 0 && c !== 0){
			returnData.x1 = "NaN";
			returnData.x2 = "NaN";
			returnData.D = checkIfDouble(D);
		}
	} 

	else {
		D = (b * b) - 4 * a * c;

		if(D > 0)
		{
			x1 = (-b + Math.sqrt(D)) / (2 * a);
			x2 = (-b - Math.sqrt(D)) / (2 * a);
			returnData.x1 = checkIfDouble(x1);
			returnData.x2 = checkIfDouble(x2);
			returnData.D = checkIfDouble(D);
		}
		
		else if(D === 0) 
		{
			x = -b / (2 * a);
			returnData.x = checkIfDouble(x);
			returnData.D = checkIfDouble(D);
		}
		
		else{
			returnData.x1 = "NaN";
			returnData.x2 = "NaN";
			returnData.D = checkIfDouble(D);
		} 
			
	}
	return returnData;
};

