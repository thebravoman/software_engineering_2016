exports.calculate = function(a,b,c)
{

var output = {};

if (a == 0 && b == 0 && c == 0) {
    	    output.x = "Any";
}

if (a == 0 && b != 0 && c != 0) {
		    output.x = ((c - 2*c) / b);
}

if (a != 0 && b != 0 && c != 0) {

	var d  = (b*b) - 4*a*c;
		 	
    if (d > 0) {
    
        output.x1 = ((b*-1) + Math.sqrt(d)) / (2*a);
    
        output.x2 = ((b*-1) - Math.sqrt(d)) / (2*a);
	    
	}
		 	 
	if (d == 0) {
    
        output.x = (b*-1) / (2*a);
    
    if (d < 0) {
        output.x1 = "NaN";
        output.x2 = "NaN";  
    }
}

 return output;
};
