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
};

exports.provideList = function(filename, contentType,  response)
{
	checkData(filename,contentType, response);
};

exports.queryData = function(filename, headers, query, response) 
{
	fs.exists(filename, function(exists) 
	{
		if(exists) 
		{		
			fs.readFile(filename, function(error, data) 
			{	
				if (!error)	
				{
					var filteredData = [];
					var allData = JSON.parse(data);
					var result = {};

					if(Array.isArray(allData.characters))
					{
						allData.characters.forEach(function(character) 
						{
							if(character.type === query)
							{
								filteredData.push(character);
							}
						});
					}

					var filteredLength = filteredData.length;
					
					if (filteredLength > 0) 
					{
						result[query] = filteredData;
					}
					
					response.end(JSON.stringify(result));
				}
				else 
				{			
					response.writeHead(500);
					response.end('Internal Server Error');
				}
			});
		}
		else
		{
			response.writeHead(404);
			response.end('Image not found');
		}
	});	
};
