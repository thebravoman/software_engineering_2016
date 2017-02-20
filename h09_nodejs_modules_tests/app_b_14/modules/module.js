function checkForDouble (value) {
	if (value % 1 == 0) {
		return value;
	}
	
	return value.toFixed(2);
}

exports.calculate = function(a,b,c){

var output = {};

if (a == 0 && b == 0 && c == 0) {
    	    output.x = "Any";
}

if (a == 0 && b != 0 && c != 0) {
		    output.x = ((c - 2*c) / b);
}

if (a != 0 && b != 0 && c != 0) {

	var D  = (b*b) - 4*a*c;
		 	
    if (D > 0) {
    
        x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
			
		output.x1 = checkForDouble(x1);
		output.x2 = checkForDouble(x2);
	    
	}
		 	 
	if (D == 0) {
        x = (-b) / (2 * a);
		output.x = checkForDouble(x);
	}
    
    if (D < 0) {
        output.x1 = "NaN";
        output.x2 = "NaN";  
    }
}

 return output;
};
