exports.solve = function(a, b, c){
	let output;
	if(a == 0){
		if(b == 0){
			if(c == 0){
				output = {"x":"Any"};				
			}
			else{
				output = {"x1":"NaN", "x2":"NaN"}; 
				//Not sure about this case here (if c = 3 ->  3 = 0)
			}
		}
		else if(b!=0){
			let x = -c/b;
			output = {"x":Number((x % 1 != 0 ? x.toFixed(2) : x))};
		}
	}
	else{
		let d = Math.pow(b, 2) - (4 * a * c);
		
		if(d>0){
			let x1, x2;
			
			x1 = (b + Math.sqrt(d))/(2*a);
			x2 = (b - Math.sqrt(d))/(2*a);
			
			output = {"x1":Number((x1 % 1 != 0 ? x1.toFixed(2) : x1)), "x2":Number((x2 % 1 != 0 ? x2.toFixed(2) : x2))};
		}
		else if (d==0){
			let x = -b/(2*a);
			output = {"x":Number((x % 1 != 0 ? x.toFixed(2) : x))};
		}
		else{
			output = {"x1":"NaN", "x2":"NaN"};
		}
	}
	return output;
};
exports.prettyPrint = function(solution){
	console.log(JSON.stringify(solution, null, 2));
};