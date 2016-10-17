var fs = require('fs');

var input = require('./input.json');

var a = input.a;
var b = input.b;
var c = input.c;

var output = {
            x1:"-",
            x2:"-",
            d:"-"
            };



	output.D  = (b*b) - 4*a*c;
		 	
    if (output.D > 0) {
    
        output.x1 = ((b*-1) + Math.sqrt(output.d)) / (2*a);
    
        output.x2 = ((b*-1) - Math.sqrt(output.d)) / (2*a);
        
        if(x1 != 0){
        output.x1 = (output.x1).toFixed(2)
        }
        
        if(x2 != 0){
        output.x2 = (output.x2).toFixed(2)
        }
	}
		 	 
	if (output.D == 0) {
    
        output.x = (b*-1) / (2*a);
        
        if(x != 0){
        output.x = (output.x).toFixed(2)
        }
        
    
    }
    
    if (output.D < 0) {
        output.x1 = "-";
        output.x2 = "-";  
    }
}

    

 console.log(JSON.stringify(output, null, 2));