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

exports.queryData = function(filename, headers, query, response) {
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
					
					allData.characters.forEach(function(character){
                        	for(var subquery in query){
		                    	for(var property in character){
									if(character[property] === query[subquery]) 
									{
										console.log("PUSHNAHME");
										filteredData.push(character);
									}
								}
							}
					});
					console.log(filteredData);
					if (filteredData.length > 0)
					{
						//result[query] = filteredData;
						var imageUrl = 'images/' + query.type;
						headers["Image-Url"] = 'http://localhost:8113/?image='+query.type;
					}

					response.writeHead(200, headers);
					response.end(JSON.stringify(filteredData));
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
