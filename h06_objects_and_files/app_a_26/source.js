var fs = require('fs');
	
function parseSync(path)
{

	if(fs.existsSync(path))
	{
		var jsonFile = fs.readFileSync(path);
		var jsonObject = JSON.parse(jsonFile);
		var answerObject;
		var a,b,c,D,x1,x2;
		
		a = jsonObject.a;
		b = jsonObject.b;
		c = jsonObject.c;

		if(a == 0)
		{
			x1 = x2 = -c/b;
			if(b == 0 || c == 0);
				x1 = x2 = "Nan";
		}


		D = Math.pow(b,2) - 4*a*c;

		if(D > 0)
		{

		x1 = (-b + Math.sqrt(D)) / (2*a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		
		}
		if(D == 0)
		{
			x2 = x1 =  (-b)/(2*a);
		}

		if(D < 0)
		{
			x1 = "Viable for all instances of X";
			x2 = "Viable for all instances of X";

		}
		if(x1 % 1 != 0 && D >= 0)
		{
			x1 = Number(x1.toFixed(2));
		}

		if(x2 % 1 != 0 && D >= 0)
		{
			x2 = Number(x2.toFixed(2));
		}

		answerObject = 
		{
			"x1" : x1,
			"x2" : x2,
			"D" : D
		}

		console.log(JSON.stringify(answerObject,undefined,1));
		
	}
}

parseSync('./input.json');