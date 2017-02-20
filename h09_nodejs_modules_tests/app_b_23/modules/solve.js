exports.solve = function(a,b,c){
	var D = 0;
	var result;
	//var b = 0, a = 2, c =3;
	D = b*b - 4*a*c;
	if(D < 0){
		result = {
			"x1":"Nan",
			"x2":"Nan"
		}
	}
	else if(a == 0){
		if(b == 0 && c == 0){
			result = {
				"x":"Any"
			}
		}
		else{
			var x = -c/b;
			if(x%1 !=0 ){ x = Number(x.toFixed(2))}
			result = {
				"x":x
			}
		}
	} 
	else {
		var x1 = (-b + Math.sqrt(D)) / (2 * a);
		if(x1%1 !=0 ){ x1 = Number(x1.toFixed(2))}
		var x2 = (-b - Math.sqrt(D)) / (2 * a);
		if(x2%1 !=0 ){ x2 = Number(x2.toFixed(2))}

		if(D%1 !=0 ){ D = Number(D.toFixed(2))}
		
		result = {
			"x1":x1,
			"x2":x2
		}
	}
return result;
};
