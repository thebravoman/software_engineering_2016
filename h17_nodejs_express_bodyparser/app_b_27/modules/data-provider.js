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

exports.provideList = function(filename, contentType,  response)
{
	readData(filename,contentType, response);
};

exports.queryData = function(filename, headers, query, response) {
	
	var JSONquery = JSON.parse(JSON.stringify(query));
	
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						var result = {};
						var filteredData = [];
						var allData = JSON.parse(data);
						var returner = 0;
						if (Array.isArray(allData.characters)){
							allData.characters.forEach(function(character) {
								for (var key in JSONquery) {
								    if (key === JSONquery[key]) {
								    	returner = 1;
								    }
								    else {
								    	returner = 0;
                                    }

                                    if (returner == 1) {
                                        filteredData.push(character);
									}

								}
							});
						}
						if (filteredData.length > 0) {
							result[query] = filteredData;
							var imageUrl = 'images/' + query;
							headers["Image-Url"] = 'http://localhost:8180/?image='+query;
						}
						
							
						response.writeHead(200, headers);
						response.end(JSON.stringify(result));
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