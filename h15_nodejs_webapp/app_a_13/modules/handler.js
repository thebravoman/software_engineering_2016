
var fs = require('fs');

exports.data_handler = function(filename, header_items, response)
{
	fs.exists(filename, function(exists)
	{
		if(exists)
		{
			fs.readFile(filename,function(error,data)
			{
					if(error)
					{
						response.writeHead(500);
						response.end('Internal Server Error');
					}
					else
					{
						response.writeHead(200, header_items);
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


};
