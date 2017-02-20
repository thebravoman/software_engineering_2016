let fs = require('fs');

function checkData(filename, response) {
	console.log('Providing ' + filename);
	fs.exists(filename, (exists) => {
		if (exists) {		
				fs.readFile(filename, (error, data) => {	
					if (!error)	{
						let headers = {
							"Content-Type": "image/jpeg"
						}
						response.set(headers);
						response.end(data);
					}
					else {			
						response.status(404);
						response.send('Internal Server Error');
					}
				});
		}
		else {
			response.status(404);
			response.send('Image not found');
		}
	});	
}

exports.provideData = function(filename, response)
{
	checkData(filename, response);
};

exports.provideList = function(filename,  response)
{
	checkData(filename, response);
};

exports.queryData = function(filename, query, response) 
{
	let headers = {};
	fs.exists(filename, function(exists) 
	{
		if(exists) 
		{		
			fs.readFile(filename, function(error, data) 
			{	
				if (!error)	
				{
					let filteredData = [];
					let allData = JSON.parse(data);
					let result = {};

					if(Array.isArray(allData.characters))
					{
						allData.characters.forEach(function(character) 
						{
							let matching = true;

							for(let key in query)
							{
								if(query[key] != character[key])
								{
									matching = false;
									break;
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
						result = filteredData;
						let imageUrl = 'images/' + query.type;
						headers["Image-Url"] = 'http://localhost:8109/?image=' + query.type;
					}
					
					response.set(headers);
					response.json(result);
				}
				else 
				{			
					response.status(404);
					response.send('Internal Server Error');
				}
			});
		}
		else
		{
			response.status(404);
			response.end('Image not found');
		}
	});	
};
