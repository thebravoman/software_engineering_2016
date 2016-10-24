exports.equation=function(a,b,c)
{
	var result=new Object;
if (a==0)
{
	if (b==0 && c==0)
	{
		result.x="Any";
		console.log(result);
	}
	else
	{
		var root=-(c/b).toFixed(2);
		result.x=root;
		console.log(result);
	}
}
else
{
	var discriminant;
	discriminant=(b*b)-(4*a*c);
	if (discriminant>0)
	{
		var root_1=((-b)+Math.sqrt(discriminant))/(2*a);
		var root_2=((-b)-Math.sqrt(discriminant))/(2*a);
		result.x1=root_1;
		result.x2=root_2;
		console.log(result);
	}
	if (discriminant==0)
	{
		var root=(-b)/(2*a).toFixed(2);
		result.x=root;
		console.log(result);
	}
	if (discriminant<0)
	{
		result.x1="Nan";
		result.x2="Nan";
		console.log(result);
	}
}
}
