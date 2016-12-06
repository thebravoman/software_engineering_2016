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
						if(contentType == "json"){
							result = JSON.parse(data);
							response.json(result);
						}else {
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
	readData(filename, contentType, response);
};

exports.provideList = function(filename, contentType, response)
{
	readData(filename, contentType, response);
};

exports.queryData = function(filename, json, response) {
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						var headers = {};
						var result = {};
						var filteredData = [];
						var i = 0;
						var allData = JSON.parse(data);
						if (Array.isArray(allData.characters)){
							allData.characters.forEach(function(character) {
							if(json){
								i = 0;
								for(key in json) {
									if (character[key] === json[key]) {
											i++;
									}
									if(i == Object.keys(json).length) {
										filteredData.push(character);
									}
								}
							}});
						}
						if (filteredData.length > 0) {
							result = filteredData;
							var imageUrl = 'images/' + json.type;
							headers["Image-Url"] = "https://localhost:3000/?image=" + json.type;
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
