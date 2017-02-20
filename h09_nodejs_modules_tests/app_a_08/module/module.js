exports.equation=function(a,b,c)
{
var result={};
if (a==0)
{
	if (b==0 && c==0)
	{
		result={"x":"Any"};
	}
	else
	{
		var root;
		root=-c/b;
		if (root%1==0)
		{
			root=(root.toFixed(2))/1;
		}
		result={"x":root}
	}
}
else
{
	var discriminant;
	discriminant=(Math.pow(b,2))-(4*a*c);
	if (discriminant>0)
	{
		var root_1,root_2;
		root_1=((-b)+Math.sqrt(discriminant))/(2*a);
		root_2=((-b)-Math.sqrt(discriminant))/(2*a);
		if (root_1%1==0)
		{
			root_1=(root_1.toFixed(2))/1;
		}
		if (root_2%1==0)
		{
			root_2=(root_2.toFixed(2))/1;
		}
		result={"x1":root_1, "x2":root_2};
	}
	if (discriminant==0)
	{
		var root;
		root=(-b)/(2*a);
		if (root%1==0)
		{
			root=(root.toFixed(2))/1;
		}
		result={"x":root};
	}
	if (discriminant<0)
	{
		result={"x1":"Nan", "x2":"Nan"};
	}
}
	return result;
}
