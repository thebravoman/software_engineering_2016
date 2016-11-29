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
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						var result = {};
						var filteredData = [];
						var allData = JSON.parse(data);
						if (Array.isArray(allData.characters)){
								allData.characters.forEach(function(character) {
								var eligible = true;

								Object.keys(query).forEach(function (param) {
									if (character[param] !== query[param]) {
										if (!isNaN(query[param])) {
											query[param] = parseFloat(query[param]);
										}
										console.log('comparing', character[param], ' and ', query[param]);
										eligible = false;
									}
								});

								if (eligible) {
									filteredData.push(character);
								}
							});
						}

						if (filteredData.length > 0) {
							result.characters = filteredData;
							if (query.image !== null) {
								var imageUrl = 'images/' + query.image;
								headers["Image-Url"] = `http://localhost:8107/?image=${query.image}`;
							}
						}
						
						response.writeHead(200, headers);
						response.end(JSON.stringify(result, null, 3));
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