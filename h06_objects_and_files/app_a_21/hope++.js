var fs = require("fs");
var input = JSON.parse(fs.readFileSync("./input.json"));

var x1 = 0;
var x2 = 0;
var D;

if(fs.a != 0)
	{

			if(fs.b != 0 && fs.c != 0)
				{
					D = Math.pow(fs.b, 2) - 4*fs.a*fs.c;
					
					if(D>=0)
						{
							x1 = (-fs.b + Math.sqrt(D))/(2*fs.a).toFixed(2);
							x2 = (-fs.b - Math.sqrt(D))/(2*fs.a).toFixed(2);
						}
					else
						{
							return;
						}
						
				}
			else
				{
					x1 = "#";
					x2 = "#";
				}
		}
	else
		{
			x1 = x2 = (-fs.c)/fs.b.toFixed(2);
		}

console.log(JSON.stringify(fs, null, 1));
