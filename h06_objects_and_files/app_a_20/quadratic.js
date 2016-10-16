var fs = require('fs');

var path = "./input.json";

if(fs.exists(path, function(exists){
	if(exists){
		fs.readFile(path, function(error, data){
			var input = JSON.parse(data);
			var output = {x1:undefined, x2:undefined, D:Math.pow(input.b, 2) - 4 * input.a * input.c};
			
			if(input.a != 0){
				if(output.D >= 0){
					output.x1 = parseFloat(((-input.b + Math.sqrt(output.D)) / (2 * input.a)).toFixed(2));
					output.x2 = parseFloat(((-input.b - Math.sqrt(output.D)) / (2 * input.a)).toFixed(2));
				} else{
					return;
				}
			} else {
				if(input.b != 0){
					output.x1 = output.x2 = parseFloat((-input.c / input.b).toFixed(2));
				} else{
					return;
				}
			}
			
			console.log(JSON.stringify(output, null, 1));
		});
	}
}));
