exports.math = function(a,b,c)
{
var print = {};
var x;
var D = b*b-4*a*c;
if(a==0)
	{
	if(b!=0)
		{
		x=-c/b;
		if(x%1!=0)
			{
			x=x.toFixed(2)/1;
			}	
		print={"x":x};
		return print;
		}
	}
else if(b==0 && c==0 )
	{
		print = {x:"Any"};
		return print;
	}
else if (D > 0)
	{
	x1=(-b+Math.sqrt(D))/2/a;
	x2=(-b-Math.sqrt(D))/2/a;
	if(x1%1!=0)
	{
		x1=x1.toFixed(2)/1;
	}
		if(x2%1!=0)
	{
		x2=x2.toFixed(2)/1;
	}
	print={"x1":x1,"x2":x2};
	return print;
	}
else if (D == 0)
	{
		x = -b/(2*a);
		print = {x:x};
		return print;
	}
else{
print = {"x1":"NaN", "x2":"NaN"};
}
}
