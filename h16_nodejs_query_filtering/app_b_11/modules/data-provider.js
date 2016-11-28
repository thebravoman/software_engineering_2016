/**
 * New node file
 */
var fs = require('fs');

function readData(filename, contentType, response)
{
	fs.exists(filename, function(result) {
		if(result) {
			fs.readFile(filename, function(error, data) {
				if(!error) {
					
				} else {
					
				}
			});
		}
	});
	
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

exports.queryData = function(filename, headers, params, response) {
	
	JSONparams = JSON.parse(JSON.stringify(params));
	
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						var result = {};
						var filteredData = [];
						var allData = JSON.parse(data);
						if (Array.isArray(allData.characters)){
								var is_for_print = true;
							allData.characters.forEach(function(character) {
								
								var is_for_print = true;
									for(key in JSONparams){
										if(JSONparams[key] !== character[key]){
											is_for_print = false;
										}
								
									}
							
									if(is_for_print)filteredData.push(character);
								
								
							});
						}
						if (filteredData.length > 0) {
							result[params.type] = filteredData;
							var imageUrl = 'images/' + params.type;
							headers["Image-Url"] = 'http://localhost:8180/?image='+params.type;
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