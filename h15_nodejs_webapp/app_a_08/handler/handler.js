var fs=require("fs");

exports.provideData=function(file, header_data, response)
{
	console.log('providing',file);
	fs.exists(file, function(exists)
	{
		if (exists)
		{
			fs.readFile(file, function(error, data)
			{
				if (error)
				{
					response.writeHead(500);
					response.end('Internal Server Error');
				}
				else
				{
					response.writeHead(200, header_data);
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
