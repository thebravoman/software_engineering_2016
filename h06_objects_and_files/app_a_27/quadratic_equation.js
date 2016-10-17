var fs = require('fs');
var fp = JSON.parse(fs.readFileSync('./input.json'));
var a = fp.a;
var b = fp.b;
var c = fp.c;
var D = 0, x1 = 0, x2 = 0, x = 0;
var result = {};

if(a == 0){
	if(b == 0 && c == 0){
		console.log("#");
		
	}else{
		x = -c / b;
		x = convert(x);
		
		result = {"x" : x};
	}
}else{
	D = ((Math.pow(b , 2)) - (4 * a * c ));
	
	if(D == 0){
		x = -b / (2 * a);
		x = convert(x);
		result = {"x" : x}
		
	}else{
		if(D > 0){
			x1 = (-b + Math.sqrt(D)) / (2 * a);
			x2 = (-b - Math.sqrt(D)) / (2 * a);
			
			x1 = convert(x1);
			x2 = convert(x2);
			
			result = {"x1" : x1, "x2" : x2, "D" : D};
		}
	}
}

if(a != 0 && b != 0){
	console.log(JSON.stringify(result, undefined, 1))
}

function convert(number) {
	if (number % 1 != 0) {
		return (number.toFixed(2));
	}
	else {
		return number;
	}
}


