var fs = require('fs');

var file_path = require('./input.json')

var a = file_path.a;
var b = file_path.b;
var c = file_path.c;

var result = {};
	
	solve_quadratic(a,b,c);

function solve_quadratic(a, b, c) {
	var a = a;
	var b = b;
	var c = c;

	if(a==0){
  
      		if(b==0){
      
          		if(c==0){ 		
				result.x1 = "every X";
				result.x2 = "every X";
				result.D = "every X";
			
			  }else{ 
				result.x1 = "no solution";
				result.x2 = "no solution";
				result.D = "no solution";
		 	 }
      	
      		}else {
			 var x = -c / b;
				
			 result.x1 = try_parse_integer(x);
			 result.x2 = try_parse_integer(x);
			 result.D = d;
			}

	} else {
  
  			var d=(Math.pow(b,2)-(4*a*c));
  			
     		if(d==0){

			 var x = -b/(2*a)
				
			 result.x1 = try_parse_integer(x);
			 result.x2 = try_parse_integer(x);
			 result.D = 0;

     		} else if(d > 0){ 
 
			var x1=(-b + Math.sqrt(d)) / (2*a);
			var x2=(-b - Math.sqrt(d)) / (2*a);

				result.x1 = try_parse_integer(x1);
			 	result.x2 = try_parse_integer(x2);
			 	result.D = d;
			
			} else{
				result.x1 = "no solution";
				result.x2 = "no solution";
				result.D = "no solution";
			}
	}
	console.log(JSON.stringify(result, null, 2));
}
	


function try_parse_integer(number) {
	if (number % 1 == 0) {
		return number;
	} else return Number(number.toFixed(2));
}
