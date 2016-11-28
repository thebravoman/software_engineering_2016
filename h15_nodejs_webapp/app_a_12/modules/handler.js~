var result;
var data;
var fs = require('fs');
function init(query) {
	if (query.image != undefined) {
		result = 1;
	}
	else {
		result =  2;
	}
}
	
function getHeaders() {
	if(result == 1) {
			return {'Content-Type': 'image/jpeg'};
	}
	else if(result == 2) {
			return {
				'Content-Type': 'application/json',
				'Image-Url': 'http://localhost:' + 8112 + '?image'
			       };
	}
	
}
function getRequestBody() {
	var filename;
	if(result == 1) {
			filename = ('image/snimkas.jpg');
			
	} else if(result == 2) {
		filename = ('data/data.json');
	}
	var data = fs.readFileSync(filename);
	return data;
}

module.exports.init = init;
module.exports.getHeaders = getHeaders;
module.exports.getRequestBody = getRequestBody;
