exports.solve = function(a, b, c)
{
	var result = {}; 
	var x1,x2,D; 
    	var D=(b*b)-(4*a*c);

	if(a==0 && b==0 &&c==0)
	{
		result = {x:"Any"};
		return result;

	}
	else
	{	if(a==0)
		{
			x1=(-c)/b;
			x1=Math.round(x1*100)/100;
			result = {"x":x1};
			return result;
		}
		else
		{	
			if(D < 0)
			{
				result = {"x1":"NaN","x2":"NaN"};
				return result;
			}
			if(D == 0)
			{
				x1=(-b)/(2*a);
				x1=Math.round(x1*100)/100;
				result = {"x":x1};
				return result;
			}
			if(D > 0)
			{
				D = Math.sqrt(D);
				x1 = ((-b)+D)/(2*a);
				x2 = ((-b)-D)/(2*a);
				x1=Math.round(x1*100)/100;
				x2=Math.round(x2*100)/100;
				result = {"x1":x1,"x2":x2};
				return result;
			}
		}
	}


};
