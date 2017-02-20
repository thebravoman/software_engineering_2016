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

exports.queryData = function(filename, headers, query_str, response) {
	
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						var result = {};
						var filteredData = [];
						var allData = JSON.parse(data);
						var numb_of_keys = Object.keys(query_str).length;
				
						if (Array.isArray(allData.characters)){
							allData.characters.forEach(function(character) {
								i = 0;
								for(key in query_str){
									if(query_str[key] == character[key]){
										i = i + 1;
									}
								}
								if(numb_of_keys == i) {
									filteredData.push(character) 
								}
							});
						}

						if (filteredData.length > 0) {
							result[query_str.type] = filteredData;
							var imageUrl = 'images/' + query_str.type;
							headers["Image-Url"] = 'http://localhost:8127/?image='+ query_str.type;
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
