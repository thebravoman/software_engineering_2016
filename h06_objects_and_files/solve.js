var fs = require('fs');
var inputPath = './input.json';

function calculateD(a, b, c)
{
	return (Math.pow(b,2)-4*a*c);
}
function solve(a, b, c)
{
	var result = {};
	if (a === 0)
	{
		if (b !== 0)
		{
			var x = c/b;
			
			result.x = Number(x).toFixed(2);
			result.D = "NaN";
			return result;	
		}
		else			
		{
			if (c === 0)
			{
				result.x = "ANY";
			}
			else
			{
				result.x = "NaN";
			}
			return result;
		}
		
	}
	else
	{
		var x1= "NaN"; 
		var x2= "NaN";
		
		var discrimanant = calculateD(a, b, c);
		
		if (discrimanant >=0)
		{
			x1 = (-b - Math.pow(discrimanant, 0.5))/(2*a);
			x2 = (-b + Math.pow(discrimanant, 0.5))/(2*a);
		}
		
		result.x1 = Number(x1).toFixed(2);
		result.x2 = Number(x2).toFixed(2);
		result.D = discrimanant;
		return result;
		
	}
}



fs.exists(inputPath, function (exists)	{
	var data = [];
	if (exists)
	{
			var jsonAsString = fs.readFile(inputPath, function(error, data){			    
			var input = JSON.parse(data);
			var result = solve(input.a, input.b, input.c);
			console.log(JSON.stringify(result));
		});
			
	}
	else
	{
		console.log('Faulty:'+ inputPath);
	}
	
});	