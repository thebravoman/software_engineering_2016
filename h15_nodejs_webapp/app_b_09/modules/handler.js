var url = require('url');
var fs = require('fs');

function provideData(filename, contentType, response) {
	
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
	
	var get_parametres = url.parse(request.url, true);
	if (get_parametres.query.image != null) {

		provideData('image/image.jpg',
								 {'Content-Type': 'image/jpeg'},
								 response);
	} else {
		provideData('data/data.json', 
								 {'Content-Type': 'application/json', 'Image-Url':'http://localhost:8209/?image'},
								 response);		
	} 
};
