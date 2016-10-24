exports.calculate = function(a,b,c)
{
var a = input.a;
var b = input.b;
var c = input.c;

var output = {};

if (a == 0 && b == 0 && c == 0) {
    	    output.x = "Any";
}

if (a == 0 && b != 0 && c != 0) {
		    output.x = ((c - 2*c) / b);
}

if (a != 0 && b != 0 && c != 0) {

	output.d  = (b*b) - 4*a*c;
		 	
    if (output.d > 0) {
    
        output.x1 = ((b*-1) + Math.sqrt(output.d)) / (2*a);
    
        output.x2 = ((b*-1) - Math.sqrt(output.d)) / (2*a);
	}
		 	 
	if (output.d == 0) {
    
        output.x = (b*-1) / (2*a);
    
    }
    
    if (output.d < 0) {
        output.x1 = "NaN";
        output.x2 = "NaN";  
    }
}

    if (typeof output.x1 !== 'string' ) {
        output.x1 = (output.x1).toFixed(2)/1;
    }
    
    if (typeof output.x2 !== 'string' ) {
        output.x2 = (output.x2).toFixed(2)/1;
    }
    
    if (typeof output.d !== 'string' ) {
        output.d = (output.d).toFixed(2)/1;
    }

 return output;
};
