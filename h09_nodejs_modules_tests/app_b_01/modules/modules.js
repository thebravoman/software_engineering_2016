exports.calculate = function(a,b,c)
{

var output = {};

if (a == 0 && b == 0 && c == 0) {
    	    output.x = "Any";
}

if (a == 0 && b != 0 && c != 0) {
		    output.x = ((c - 2*c) / b);
	
		if (typeof output.x !== 'string' ) {
       		output.x = (output.x).toFixed(2)/1;
    }
}

if (a != 0 && b != 0 && c != 0) {

	var d  = (b*b) - 4*a*c;
		 	
    if (d > 0) {
    
        output.x1 = ((b*-1) + Math.sqrt(d)) / (2*a);
    
        output.x2 = ((b*-1) - Math.sqrt(d)) / (2*a);
	    
	if (typeof output.x1 !== 'string' ) {
        output.x1 = (output.x1).toFixed(2)/1;
    }
    
    if (typeof output.x2 !== 'string' ) {
        output.x2 = (output.x2).toFixed(2)/1;
    }
	}
		 	 
	if (d == 0) {
    
        output.x = (b*-1) / (2*a);
	if (typeof output.x !== 'string' ) {
       	output.x = (output.x).toFixed(2)/1;
    
    }
    
    if (d < 0) {
        output.x1 = "NaN";
        output.x2 = "NaN";  
    }
}

 return output;
};
