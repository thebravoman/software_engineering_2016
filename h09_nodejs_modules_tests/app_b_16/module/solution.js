function is_int(num) {
	if (num % 1 != 0){
		num=num.toFixed(2)/1;
	}
	return num;
}

exports.solve = function(a, b, c){
	var result ={};
	if(a==0 && b==0 && c==0){
		result.x = "Any";
		
	}
	 if( a==0 && b!=0){
		result.x = -c/b ;
		is_int(result.x);
		
	}
	else if ( b != 0 ) {

		result.D = b*b -4*a*c ;
		is_int(result.D);
		
		if( result.D > 0) {
			result.x1 = (-b + Math.sqrt(result.D))/(2*a);
			result.x2 = (-b - Math.sqrt(result.D))/(2*a);
			is_int(result.x1);
			is_int(result.x2);
		}
		else  if (result.D == 0) {
			result.x = (-b)/(2*a);
			is_int(result.x);
			
		}
		else {
			result.x1="NaN";
			result.x2="NaN";	
		}
	}

	
	 console.log(JSON.stringify(result, null, 2));
}