exports.quadratic_solver = function(a, b, c)

{
	var x, x1, x2, d;
	var endjson={};
	
	if(a == 0)
	{
		if(b == 0 && c == 0)
		{
			endjson = {
				"x":"Any"
			}
		}
	
		else if(b!=0){
			x = -c/b;
			
			if(x%1!=0)
			{
				x=(x.toFixed(2))/1;
			}
	
			endjson = {
				"x":x
			}	
		}
	
	}
	
	else
	{
		d = b*b - (4*a*c);
	
		if(d<0)
		{
			endjson = {
				"x1":"NaN",
				"x2":"NaN"
			}
		}
		
		if(d>0)
		{
			x1 = (-b + Math.sqrt(d))/(2*a);
			x2 = (-b - Math.sqrt(d))/(2*a);
			
			if(x1%1!=0)
			{
				x1=(x1.toFixed(2))/1;
			}
	
			if(x2%1!=0)
			{
				x2=(x2.toFixed(2))/1;
			}
			
			endjson = {
				"x1":x1,
				"x2":x2
			}
		}
	
		if (d==0)
		{
			x = -b/(2*a);
	
			if(x%1!=0)
			{
				x=(x.toFixed(2))/1;
			}
	
			endjson = {
				"x":x
			}
		}
	}
	return endjson;
}
