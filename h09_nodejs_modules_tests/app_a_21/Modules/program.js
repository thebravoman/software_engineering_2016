exports.solve = function (a, b, c)
{
var x1 = 0;
var x2 = 0;
var D;
var output = {};

if(a == 0 && b == 0 && c == 0)
{
	output = { "x1" : "Any"};
}
if(a != 0)
{
	if(b != 0)
	{
		if(c != 0)
		{
			D = b*b - (4*a*c);

			if(D>0)
			{
				x1 = ((-b) + Math.sqrt(D))/(2*a).toFixed(2)/1;
				x2 = ((-b) - Math.sqrt(D))/(2*a).toFixed(2)/1;
				
				output = {
							"x1" : x1,
							"x2" : x2
				}
						
			}
			if(D === 0)
			{
				x1 = (-b)/(2*a);
				output = {
							"x" : x1
				}
			}
			if(D < 0)
			output = {
				"x1" : "NaN",
				"x2" : "NaN"
			} 
		}
		else
		{
			x1 = ((-b)/a).toFixed(2)/1;
			output = {
						"x" : x1
			}			
		}
	}
	else
	{
		output = {
					"x" : "NaN"
		}
	}

}
else
{
	x1 = ((-c)/b).toFixed(2)/1;
	output = {
				"x" : x1
	}
}

return output;


};
