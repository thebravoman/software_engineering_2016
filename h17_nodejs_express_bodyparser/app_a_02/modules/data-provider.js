var fs = require('fs');

function readData(filename, contentType, response)
{
	console.log('providing ' + filename);
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{

							response.writeHead(200, contentType);
							response.end(data);

					}
					else {			
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
}



exports.provideData = function(filename, contentType, response)
{
	readData(filename,contentType, response);
};

exports.provideList = function(filename,  response)
{
	console.log('providing ' + filename);
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{

							response.writeHead(200, {'Content-Type': 'application/json'});
							response.end(data);
					}
					else {			
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

exports.queryData = function(filename, query, response) {
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{

						var filteredData = [];
						var i;

						var allData = JSON.parse(data);
						if (Array.isArray(allData.characters)){
							allData.characters.forEach(function(character) {
								i=0;
								for(key in query) {
									if (character[key] === query[key]) {
											i++;
									}
									if(i == Object.keys(query).length) {
										filteredData.push(character);
									}
									console.log(character[key]);

							}});
						}
						var headers= {'Content-Type': 'application/json'};

						if (filteredData.length > 0) {
							var imageUrl = 'images/' + query.type;
							 headers["Image-Url"] = 'http://localhost:8102/?image=' + query.type;
						}
						response.writeHead(200, headers);
						response.end(JSON.stringify(filteredData));
					}
					else {			
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
