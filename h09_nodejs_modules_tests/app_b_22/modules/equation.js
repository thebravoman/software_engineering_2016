function IsDouble(x)
{
	if(x % 1 != 0)
	{
		return Number(x.toFixed(2));
	}
	else return x;
}
exports.matematika = function(a,b,c)
{
	var Data = {};
	var D = 0;
	var x = 0;
	var x1 = 0;
	var x2 = 0
	D = b * b  - (4 * a * c );
	Data.D = IsDouble(D);
	if(a == 0)
	{
		if(b != 0)
		{
			x = -c/b;
			Data.x=IsDouble(x);
		}
		else if(b == 0 && c == 0)
		{
			Data.x1 = "Any";
			Data.x2 = "Any";
		}
		else if(b == 0 & c != 0)
		{
			Data.x1 = "NaN";
			Data.x2 = "NaN";	
		}
	}
	else
	{			
		if(D < 0)
		{
			Data.x1 = "NaN";
			Data.x2 = "NaN";
		}
		else if (D > 0)
		{
			x1 = (-b + (Math.sqrt(D))) / (2 * a);
			x2 = (-b - (Math.sqrt(D))) / (2 * a);
			Data.x1 = IsDouble(x1);
			Data.x2 = IsDouble(x2);
		}
		else if (D == 0)
		{
			x = -b / (2 * a);
			Data.x = IsDouble(x);
		}
	}
	return Data;
};
