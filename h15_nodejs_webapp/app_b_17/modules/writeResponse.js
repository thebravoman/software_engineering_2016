var fs = require('fs');

function writeResponse(file, header, response)
{
	fs.exists(file, function(exists) {
		if (exists) {		
			fs.readFile(file, function(error, data) {	
				if (error)	{
					response.writeHead(500);
					response.end('Server Error');
				}
				
				else {
					response.writeHead(200, header);
					response.end(data);
				}
			});
		}
		else
		{
			response.writeHead(404);
			response.end('File not found');
		}
	});
	
}

exports.responseWriter = function(file, header, response)
{
	writeResponse(file, header, response);	
};