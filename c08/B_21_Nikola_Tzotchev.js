var fs = require('fs');

path = "gosho.json";
if (fs.existsSync(path))
{
	var jsonAsString = fs.readFileSync(path);
	var packageJSON = JSON.parse(jsonAsString);
	console.log(Object.keys(packageJSON));
	
}
