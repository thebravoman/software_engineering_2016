const fs = require("fs");

exports.provideData = function(filename, headerContent, response)
{
	console.log("Providing " + filename);
	fs.exists(filename, function(exists)
	{
		if(exists)
		{
			fs.readFile(filename, function(error, data){
              		if (error)
			{
                  		response.writeHead(500);
                    		response.end("Internal Server Error");
                	} else {
                    		response.writeHead(200, headerContent);
                    		response.end(data);
			}
		});
		} else {
			response.writeHead(404);
			response.end("Image not found");
		}
	});
};


exports.queryData = function(filename, headers, query, response)
{
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
								if (character.type === query)
								{
									filteredData.push(character);
								}
							});
						}
						if (filteredData.length > 0)
						{
							result[query] = filteredData;
							var imageUrl = 'images/' + query;
							headers["Image-Url"] = 'http://localhost:8108/?image='+query;
						}						
						response.writeHead(200, headers);
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
