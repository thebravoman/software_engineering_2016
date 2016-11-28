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

						if(Array.isArray(allData.characters))
						{
							allData.characters.forEach(function(character) 
							{
								let matching = false;

								for(let key in query) 
								{
									if(key in character)
									{
										if(character[key] == query[key])
										{
											matching = true;
										}
									}
								}

								if(matching == true)
								{
									filteredData.push(character);
								}
							});
						}

						var filteredLength = filteredData.length;
						
						if (filteredLength > 0) 
						{
							var filteredType = filteredData[0].type;
							if(filteredType == undefined)
							{
								headers["Image-Url"] = "Unable to extract image URL from the character type";
							}
							else
							{
								headers["Image-Url"] = 'http://localhost:8109/?image='+filteredType;
							}
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
