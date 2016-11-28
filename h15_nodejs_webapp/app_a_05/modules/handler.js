var fs = require('fs');
var error='Internal Server Error';
var img_error='Image not found';
var counter;
var get_Data;
var length;
function read_File(name, contentType, response)
{
	console.log('Using:' + name);
	fs.exists(name, function(exists) {
		if (!exists) 
		{
			response.writeHead(404);
			response.end(img_error);
		}
		else {		
			fs.readFile(name, function(err, data) {	
			if (err)	{
				response.writeHead(500);
				response.end(error);
			}
			else {			
				response.writeHead(200, contentType);
				response.end(data);
			}
			});
		}
	});	
}
exports.provide_resources = function(name, contentType, response)
{
	read_File(name,contentType, response);
	read_File(name, contentType, response);

};
exports.queryData = function(name, headers, query, response) {
	fs.exists(name, function(exists) {
		if (exists) {
				fs.readFile(name, function(err, data) {
				if(err){
					response.writeHead(500);
					response.end(error);
				}
				else {			
					var filter = [];
					get_Data = JSON.parse(data);
					if(Array.isArray(get_Data.characters))
					{
						length=Object.keys(query).length;
						get_Data.characters.forEach(function(char) {
							counter=0;
							for(key in query) {
								if(char[key] === query[key]) {
									counter++;
									if(counter == length) {
										filter.push(char);
									}
								}
						}});
					}
					length=filter.length
					if (length > 0) {
						var imageUrl = 'images/' + query.type;
						headers["Image-Url"] = 'http://localhost:8105/?image=' + query.type;
					}
					response.writeHead(200, headers);
					response.end(JSON.stringify(filter));
				}
			});
		}
		else
		{
			response.writeHead(404);
			response.end(img_error);
		}
	});	
};
