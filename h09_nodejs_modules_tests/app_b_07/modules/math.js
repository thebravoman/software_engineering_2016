exports.solve = function(a, b, c)
{
	var Hash = new Object;
	var D = b * b - 4 * a * c;
	if(a == 0) {
		if(b != 0) {
			Hash.x = -(c/b).toFixed(2);
		}
		else {
			if (c != 0) {
				Hash.x1 = "NaN";
				Hash.x2 = "NaN";
			}		
			else Hash.x = "Any";
		}
	}
	else {
		if(D < 0) {
			Hash.x1 = "NaN";
			Hash.x2 = "NaN";
			return Hash;
		}
		if(+( ( -b + Math.sqrt(D) ) / (2*a) ).toFixed(2) == +( ( -b - Math.sqrt(D) ) / (2*a) ).toFixed(2)) {
			Hash.x = +( ( -b + Math.sqrt(D) ) / (2*a) ).toFixed(2);
		}	
		else {
			Hash.x1 = +( ( -b + Math.sqrt(D) ) / (2*a) ).toFixed(2);
			Hash.x2 = +( ( -b - Math.sqrt(D) ) / (2*a) ).toFixed(2);
		}    
	}
	return JSON.stringify(Hash, null , 2);
};
