var fs = require('fs');

fs.readFile("./input.json" , function(err, result){
    
	if (err) {
		console.error(err);
	}
	
	var x1 = 0, x2 = 0, d = 0;
	
	var data = JSON.parse(result);
	
	if (data.a == 0) { 
		if (data.b == 0) {
			if (data.c == 0) {
			 	printJSON("#", "#", "-");
			} else {
				printJSON("-", "-", "-");
			}
		}
	} else { 
		d = Math.pow(data.b, 2) - 4 * data.a * data.c;
		
		if (d == 0) {
			x2 = x1 = -data.b / (2 * data.a)
			printJSON(x1 % 1 == 0? x1 : x1.toFixed(2), x2 % 1 == 0? x2 : x2.toFixed(2), d % 1 == 0? d : d.toFixed(2));
		} else if (d > 0) {
			x1 = (-data.b + Math.sqrt(d)) / (2 * data.a)
			x2 = (-data.b - Math.sqrt(d)) / (2 * data.a)
		
			printJSON(x1 % 1 == 0? x1 : x1.toFixed(2), x2 % 1 == 0? x2 : x2.toFixed(2), d % 1 == 0? d : d.toFixed(2));
			
		} else { 
			output['D'] = 'D < 0';
		}
	}
});

function printJSON(x1, x2, D) {
	var output = {
		"x1":x1,
		"x2":x2,
		"D":D
	}
	console.log(JSON.stringify(output, null, 1));
}
