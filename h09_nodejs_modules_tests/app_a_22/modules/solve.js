exports.solve = function(input_a, input_b, input_c) {
	var x;
	var x1;
	var x2;
	var D;
	var result;

	if (input_a === 0 && input_b === 0 && input_c === 0){
		result = {"x": "Any"};
	}
	if (input_a !== 0) {
		if (input_b !== 0) { 
			if (input_c !== 0) { 
				D = (input_b * input_b) - (4 * input_a * input_c);
				if (D > 0) {
					x1 = Number(-input_b + Math.sqrt(D))/((input_a)*2).toFixed(2)/1;
					x2 = Number(-input_b - Math.sqrt(D))/((input_a)*2).toFixed(2)/1;
					result = {"x1": x1, "x2": x2};
				}
				if (D === 0) {
					x1 = x2 = Number(-(input_b / 2*input_a)).toFixed(2)/1;
					result = {"x": x1};
				}
				if (D < 0) {
					result = {"x1": "NaN","x2": "NaN"};
				}
			}
		}
	}
	return result;
};
