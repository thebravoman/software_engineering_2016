var fs = require('fs');

function Manage_Data(filename, content_type, response) {

	fs.exists(filename, function(exists) {
		if (exists) {
			fs.readFile(filename, function (error, data) {

				if (!error) {
					response.writeHead(200, content_type);
					response.end(data);

				} else {
					response.writeHead(500);
					response.end("Internal server error...");
				}
			});
			
		} else {
			response.writeHead(404);
			response.end('Image: Not found...');
		}
	});
}

exports.Provide_Data = function(filename, content_type, response) {

	return Manage_Data(filename, content_type, response);
};
