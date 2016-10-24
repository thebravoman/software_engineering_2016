exports.calculate = function(a,b,c)
{

var result = {};

	if(a==0){
  
      		if(b==0){
      
          		if(c==0){ 		
				result.x = "Any";
			
			  }else{ 
				result.x1 = "NaN";
				result.x2 = "NaN";
		 	 }
      	
      		}else {
			 var x = -c / b;
				
			 result.x1 = try_parse_integer(x);
			}

	} else {
  
  			var d=(Math.pow(b,2)-(4*a*c));
  			
     		if(d==0){

			 var x = -b/(2*a)
				
			 result.x1 = try_parse_integer(x);

     		} else if(d > 0){ 
 
			var x1=(-b + Math.sqrt(d)) / (2*a);
			var x2=(-b - Math.sqrt(d)) / (2*a);

				result.x1 = try_parse_integer(x1);
			 	result.x2 = try_parse_integer(x2);
			
			} else{
				result.x1 = "NaN";
				result.x2 = "NaN";
			}
	}

	return result;

	


	function try_parse_integer(number) {
		if (number % 1 == 0) {
			return number;
		} else return Number(number.toFixed(2));
	}

}
