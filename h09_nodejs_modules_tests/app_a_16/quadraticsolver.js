exports.solve = function (a, b, c)
{
	if(a == 0 && b == 0 && c == 0)
		{
			var result = {"x": "Any"};
		}
	else
	{
		var discriminant = ((b*b)-(4*a*c));
		var x1 = (-(b) + Math.sqrt(discriminant)) / (2*a);
		var x2 = (-(b) - Math.sqrt(discriminant)) / (2*a);
		if(discriminant < 0)
			{
				var result = {"x1": "NaN", "x2": "NaN"};
			}
		else if(discriminant == 0)
			{
				var result = {"x": x1};
			}
		else if(discriminant > 0)
			{
				var result = {"x1": x1, "x2": x2};
			}
	}
	return result;
};