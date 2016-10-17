var fs = require('fs');

var input = require('./input.json');

var a = input.a;
var b = input.b;
var c = input.c;

var output = {x1:"-", x2:"-",  d:"-"};

if (a == 0 && b == 0 && c == 0) {
    	    output.x1 = "∀X";
		 	output.x2 = "Няма";
		 	output.d  = "Няма";
}

if (a == 0 && b != 0 && c != 0) {
		    output.x1 = ((c - 2*c) / b);
		    output.x2 = "Няма";
		 	output.d  = "Няма";
}

if (a != 0 && b != 0 && c != 0) {

	output.d  = (b*b) - 4*a*c;
		 	
    if (output.d > 0) {
    
        output.x1 = ((b*-1) + Math.sqrt(output.d)) / (2*a);
    
        output.x2 = ((b*-1) - Math.sqrt(output.d)) / (2*a);
	}
		 	 
	if (output.d == 0) {
    
        output.x1 = (b*-1) / (2*a);
        output.x2 = "Няма";
    
    }
    
    if (output.d < 0) {
        output.x1 = "Няма реални корени";
        output.x2 = "Няма реални корени";  
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

 console.log(JSON.stringify(output, null, 2));
