exports.equation = function(a,b,c){
	var final = new Object;
	if (a == 0 && b != 0){
		var x1 = +(c/b).toFixed(2);
		final.x = x1;
		return final;
	}else if (a != 0){
	 	var D = b*b - 4*a*c;
		if (D == 0){
			var x = +(-b/2/a).toFixed(2);
			if (x == -0){
				var x = +Math.abs(x);
				final.x = x;
				return final;
			}
			else{ 
				final.x = x; 
				return final;
			}
		}else if (D > 0){
		 	var x1 = +((-b-Math.sqrt(D))/2/a).toFixed(2);
		 	var x2 = +((-b+Math.sqrt(D))/2/a).toFixed(2);
		 	final.x1 = x1;
		 	final.x2 = x2;
			return final;
		}else if (D < 0){
			final.x1 = "NaN";
			final.x2 = "NaN";	
			return final;
		}
	}
	if (b == 0 && a == 0 && c == 0){
		final.x = "Any"
		return final;	
	}
}
