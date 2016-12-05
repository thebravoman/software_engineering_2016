/**
 * New node file
 */
var fs = require('fs');

function readData(filename, contentType, response)
{
	console.log('providing ' + filename);
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						if (filename === 'data/data.json'){
							response.json(JSON.parse(data));
						} else {
							response.writeHead(200, contentType);
							response.end(data);
						}
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

exports.provideList = function(filename, contentType,  response)
{
	readData(filename,contentType, response);
};

exports.queryData = function(filename, query, response) {
	
	var JSONquery = JSON.parse(JSON.stringify(query));

	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						var result = {};
						var filteredData = [];
						var allData = JSON.parse(data);
						if (Array.isArray(allData.characters)){
							allData.characters.forEach(function(character) {
								var legit = false;
								for (var key in JSONquery) {
								    if (JSONquery[key] === character[key]) {
								    	legit = true;
								    }
								}
								
								if(legit) {
									filteredData.push(character);
								}
							});
						}
						if (filteredData.length > 0) {
							result[query] = filteredData;
							var imageUrl = 'images/' + query;
						}
						response.json(result);
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