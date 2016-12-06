var fs=require("fs");

exports.readData=function(file, contentType, response)
{
	console.log('providing' + file);
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
					response.writeHead(200, contentType);
					response.end(data);
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

exports.provideData=function(file, contentType, response)
{
	readData(file, contentType, response);
};

exports.provideList=function(file, contentType, response)
{
	readData(file, contentType, response);
};

exports.queryData=function(file, headers, query, response)
{
	fs.exists(file, function(exists)
	{
		if (exists)
		{
			fs.readFile(file, function(error, data)
			{
				if (!error)
				{
					var filteredData=[];
					var j;
					var all=JSON.parse(data);
					if (Array.isArray(all.characters))
					{
						all.characters.forEach(function(character)
						{
							j=0;
							for (key in query)
							{
								if (character[key]===query[key])
								{
									j++;
								}
								if (j==Object.keys(query).length)
								{
									filteredData.push(character);
								}
							}
						});
					}
					if (filteredData.length>0)
					{
						var imageUrl='images/'+query.type;
						headers["Image-Url"]='http://localhost:8108/?image' + query.type;
					}
					response.writeHead(200, headers);
					response.end(JSON.stringify(filtered));
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
