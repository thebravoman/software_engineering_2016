var fs = require('fs');

var path = require('./quad_input.json')


var a = path.a;
var b = path.b;
var c = path.c;
quadratic(a, b, c);



function quadratic(a, b, c){
	var D = ((b*b) - (4*a*c));

	
	if (D > 0){
		var x1 = (-b + Math.sqrt(D)) / (2*a);
		var x2 = (-b - Math.sqrt(D)) / (2*a);
		x1 = (x1).toFixed(2)/1;
		x2 = (x2).toFixed(2)/1;
		to_json(D, x1, x2);
	}

	
	if (D == 0)
	{
		var x = (-b)/(2*a);
		x = (x).toFixed(2)/1;
		to_json(D, x);
	}
	
	if (D < 0){
		console.log("No real roots");
	}


}


function to_json(D, x1, x2){
	if (x2){
		var to_json = {
			"x1":x1,
			"x2":x2,
			"D":D
		}
	}
	else {
		var to_json = {
			"x":x1,
			"D":D
		}
	}
	
	console.log(JSON.stringify(to_json, null, 1));
}
