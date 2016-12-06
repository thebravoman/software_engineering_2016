let fs = require('fs');

function readData(filename, contentType, response)
{
	console.log('providing ' + filename);
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
<<<<<<< HEAD
						response.writeHead(200, contentType);
						response.end(data);
					}
					else {			
						response.writeHead(500);
=======
						response.set('Content-Type', 'image/jpeg');
						console.log('upper');
						response.end(data);
					}
					else {			
>>>>>>> 527c97df9ab45c0b59d13b9ab64d5e046afdde85
						response.end('Internal Server Error');
					}
				});
		}
<<<<<<< HEAD
		else
		{
			response.writeHead(404);
=======
		else {
>>>>>>> 527c97df9ab45c0b59d13b9ab64d5e046afdde85
			response.end('Image not found');
		}
	});	
}



<<<<<<< HEAD
exports.provideData = function(filename, contentType, response)
{
	readData(filename,contentType, response);
};

exports.provideList = function(filename, contentType,  response)
{
	readData(filename,contentType, response);
=======
exports.provideData = function(filename, response) {
	readData(filename, response);
};

exports.provideList = function(filename,  response) {
	readData(filename, response);
>>>>>>> 527c97df9ab45c0b59d13b9ab64d5e046afdde85
};

exports.queryData = function(filename, headers, query, response) {
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						let result = {};
						let filteredData = [];
						let allData = JSON.parse(data);
						if (Array.isArray(allData.characters)){
							allData.characters.forEach(function(character) {
								let match = true;
								for(let key in query){
									if(query[key] != character[key]){
										match = false;
										break;
									}
								}
								if(match){
									filteredData.push(character);
								}
							});
						}
						if (filteredData.length > 0) {
							result = filteredData;
							let imageUrl = 'images/' + query.type;
							headers["Image-Url"] = 'http://localhost:8180/?image=' + query.type;
						}
						
							
						response.writeHead(200, headers);
						response.end(JSON.stringify(result));
					}
					else {			
						response.writeHead(500);
						response.end('Internal Server Error');
					}
<<<<<<< HEAD
				});
=======
					
					response.set(headers);
					response.json(result);
				}
				else {			
					response.end('Internal Server Error');
				}
			});
>>>>>>> 527c97df9ab45c0b59d13b9ab64d5e046afdde85
		}
		else
		{
			response.writeHead(404);
			response.end('Image not found');
		}
	});	
};
