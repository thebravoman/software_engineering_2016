var fs = require('fs');

path = "package.json";
if (fs.existsSync(path))
{
	var jsonString = fs.readFileSync(path);
	var packageJSON = JSON.parse(jsonString);
	console.log(Object.keys(packageJSON));
	
}
