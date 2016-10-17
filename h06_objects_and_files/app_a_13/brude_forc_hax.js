var fs = require('fs');
var input = require('./input.json');


if(input["a"] == 0)
{
	if(input["b"] == 0 && input["c"] == 0)
	{
		let endjson = {
				"x":"every x is answer"

			}

		console.log(JSON.stringify(endjson, null, 1));
	}


	else if(input["b"]!=0){
		let x = -input["c"]/input["b"];
		
		if(x%1!=0)
		{
			x=(x.toFixed(2))/1;
		}

		let endjson = {
				"x1":x,
				"x2":x,
				"D":undefined
			}
		
		
		console.log(JSON.stringify(endjson, null, 1));	
	}

}

else
{
	var d = input["b"]*input["b"] - (4*input["a"]*input["c"]);

	if(d>0)
	{
		let x1, x2;
		x1 = (-input["b"] + Math.sqrt(d))/(2*input["a"]);
		x2 = (-input["b"] - Math.sqrt(d))/(2*input["a"]);
		
		if(x1%1!=0)
		{
			x1=(x1.toFixed(2))/1;
		}

		if(x2%1!=0)
		{
			x2=(x2.toFixed(2))/1;
		}

		if(d%1!=0)
		{
			d=(d.toFixed(2))/1;
		}
		
		let endjson = {
				"x1":x1,
				"x2":x2,
				"D":d
			}

		console.log(JSON.stringify(endjson, null, 1));
	}

	else if (d==0)
	{
		let x;
		x = -input["b"]/(2*input["a"]);

		if(x%1!=0)
		{
			x=(x.toFixed(2))/1;
		}

		let endjson = {
				"x1":x,
				"x2":x,
				"D":0
			}

		console.log(JSON.stringify(endjson, null, 1));
	}
}
