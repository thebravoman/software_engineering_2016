/**
 * New node file
 */
var fs = require('fs');

function readFile(filename, header, response)
{

	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						response.writeHead(200, header);
						response.end(data);
					}
					else {			
						response.writeHead(500);
						response.end('Internal Server Error');
					}
				});
		}
		else
		{
			response.writeHead(404);
			response.end('Content not found');
		}
	});
	
}

exports.writer = function(response)
{
	readFile(filename, header, response);	
};
