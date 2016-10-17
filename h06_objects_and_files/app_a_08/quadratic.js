const fs=require("fs");
const i=JSON.parse(fs.readFileSync("./input.json"));

if (i.a==0)
{
	if (i.b==0 && i.c==0)
	{
		console.log("#");
	}
	else
	{ 
		root=-i.c/i.b;
		if (root%1!=0)
		{
			root=(root.toFixed(2))/1;
		}
		output={"x":root};
		console.log(JSON.stringify(output,undefined,1));
	}
}
else
{
	var discriminant=(Math.pow(i.b,2)-(4*i.a*i.c));
	if (discriminant>0)
	{
		root_1=(-i.b)+Math.sqrt(discriminant)/(2*i.a);
		root_2=(-i.b)-Math.sqrt(discriminant)/(2*i.a);
		if (root_1%1!=0)
		{
			root_1=(root_1.toFixed(2))/1;
		}
		if (root_2%1!=0)
		{
			root_2=(root_2.toFixed(2))/1;
		}
		output={"x1":root_1,"x2":root_2,"D":discriminant};
	}
	if (discriminant==0)
	{
		root=(-i.b)/(2*i.a);
		if (root%1!=0)
		{
			root=(root.toFixed(2))/1;
		}
		output={"x":root};
		console.log(JSON.stringify(output,undefined,1));
	}
}
