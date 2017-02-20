var fs = require('fs');
var path = "/home/elsyser/Desktop/ex.json"

function parseJson(path) {
	if (fs.existsSync(path)) {
		var JSONString = JSON.readFileSync(path);
		console.log(JSONString);
	}
	
}

parseJson(path);
