var fs = require('fs');
var url = require('url');

function da_ta(filename, contentType, response) {
	
	fs.access(filename, function(error, access) {
		if (error) {
			response.writeHead(404);
			response.end("Not found");
		} else {
			fs.readFile(filename, function (error, data) {
				if (error) {
					response.writeHead(500);
					response.end("Internal server error");
				} else {
					response.writeHead(200, contentType);
					response.end(data);
				}
			});
		}
	});
}

exports.proccessGETRequest = function(request, response) {
	
	var params = url.parse(request.url, true);
	if (params.query.image != null) {

		da_ta('image/image.jpg',
								 {'Content-Type': 'image/jpeg'},
								 response);
	} else {
		da_ta('data/data.json', 
								 {'Content-Type': 'application/json', 'Image-Url':'http://localhost:8206/?images'},
								 response);		
	} 
};
