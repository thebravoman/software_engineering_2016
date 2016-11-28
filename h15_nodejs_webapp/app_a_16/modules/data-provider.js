var fs = require("fs");

function readData(filename, contentType, response)
{
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
					response.end('Internal Server Error');
				}
			});
		}
		else
		{
			response.writeHead(404);
			response.end('File Not Found');
		}
	});
}

exports.provideData = function(filename, contentType, response)
{
	return readData(filename, contentType, response);
};

exports.queryData = function(filename, headers, key, query, response) {

	fs.exists(filename, function(exists) 
	{
		if (exists) 
		{
		    fs.readFile(filename, function(error, data) 
		    {
		        if (!error) 
		        {
					var result = {};
					var filteredData = [];
					var allData = JSON.parse(data);
					
					if (Array.isArray(allData.characters)) 
					{
                        allData.characters.forEach(function(character) 
                        {
							if (character[key] === query) 
							{
								filteredData.push(character);
							}
						});
					}
					
					if (filteredData.length > 0)
					{
						result[query] = filteredData;
						var imageUrl = 'images/' + query;
						headers["Image-Url"] = 'http://localhost:8113/?image='+query;
					}

					response.writeHead(200, headers);
                    console.log(result);
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