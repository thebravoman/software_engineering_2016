var fs = require('fs');

function checkData(filename, contentType, response)
{
	console.log('Providing ' + filename);
	fs.exists(filename, function(exists)
	{
		if(exists)
		{
			fs.readFile(filename, function(error, data)
			{
				if(!error)
				{
					response.writeHead(200, contentType);
					console.log(contentType);
					response.end(data);
				}
				else
				{
					response.writeHead(500);
					response.end('Internal Server Error!');
				}
			});
		}
		else
		{
			response.writeHead(404);
			response.end('Image not found');
		}
	});
}
exports.provideData = function(filename, contentType, response)
{
	return checkData(filename, contentType, response);
}