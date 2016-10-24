exports.solve = function(a, b, c)
{
	var output = {};
	if (a === 0)
	{
		if (b === 0 && c === 0)
		{
			output = {"x":"Any"};
		}
		else
		{
			var x = -c/b;
			if (x % 1 !== 0)
			{
				x = (x.toFixed(2))/1;
			}
			output = {"x":x};
		}
	}
	
	else
	{
		var D = (Math.pow(b, 2) - (4 * a * c));
	
		if (D > 0)
		{
			var x1 = (-b - Math.sqrt(D)) / (2 * a);
			var x2 = (-b + Math.sqrt(D)) / (2 * a);
			if (x1 % 1 !== 0)
			{
				x1 = (x1.toFixed(2))/1;
			}
			if (x2 % 1 !== 0)
			{
				x2 = (x2.toFixed(2))/1;
			}
			output = {"x1":x1, "x2":x2};
		}
	
		if (D === 0)
		{
			var x = (-b) / (2 * a);
			if (x % 1 !== 0)
			{
				x = (x.toFixed(2))/1;
			}
			output = {"x":x};
		}
		
		if (D < 0)
		{
			output = {"x1":"NaN", "x2":"NaN"};
		}
	}
	return output;
}
	
	
	
	
	
	
	