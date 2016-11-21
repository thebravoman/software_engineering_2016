var fs = require('fs');

function Handle(filename, contentType, response)
{
	fs.exists(filename, function(exists)
		{
			if(exists)
			{
				fs.readfile(filename, function(error, data) 
				{
					if(!error)
					{
						response.writeHead(200, contentType);
						response.end(data);
					}
					else
					{
						response.writeHead(500);
						response.end("Internal server error");
					}
				});
			}
			else
			{
				response.writeHead(404);
				response.end("File Not Found.");
			}
		});
}

exports.provide = function(filename, contentType, response)
{
	return Handle(filename, contentType, response);
}