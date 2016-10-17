var fs = require('fs');

fs.readFile("./input.json", function(error, data) {
	if(error) throw error;
	var equationData = JSON.parse(data);
	var D = 0;

	if(equationData.a == 0) {
		if(equationData.b != 0) 
		{
			var x = -equationData.c / equationData.b
			printJSONFormat(checkIfDouble(x), checkIfDouble(x), D);
		}

		else if(equationData.b == 0 && equationData.c == 0)
			printJSONFormat("(-∞, +∞)", "(-∞, +∞)", D);

		else if(equationData.b == 0 && equationData.c != 0)
			printJSONFormat("not real root", "not real root", D);
	} 

	else {
		D = (equationData.b * equationData.b) - 4 * equationData.a * equationData.c;

		if(D > 0)
		{
			x1 = (-equationData.b + Math.sqrt(D)) / (2 * equationData.a);
			x2 = (-equationData.b - Math.sqrt(D)) / (2 * equationData.a);
			printJSONFormat(checkIfDouble(x1), checkIfDouble(x2), D);
		}
		
		else if(D == 0) 
		{
			var x = -equationData.b / (2 * equationData.a);
			printJSONFormat(checkIfDouble(x), checkIfDouble(x), D);
		}
		
		else 
			printJSONFormat("not real root", "not real root", D);
	}
})

function checkIfDouble(x) {
	if(x % 1 != 0) 
		return Number(x.toFixed(2));
	else 
		return x;
}

function printJSONFormat(x1, x2, D) {
	var objToPrint = {
		"x1":x1,
		"x2":x2,
		"D":D
	}
	console.log(JSON.stringify(objToPrint, null, 1));
}