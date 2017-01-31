var url = require('url');
var fs = require('fs');

exports.provideData = function(filename, query, response) {
	
	fs.access(filename, function(error, data) {
		
		if (error) {
			response.status(404);
			response.send("Not found");
		} else {
			fs.readFile(filename, function(error, data) {
				if (error) {
					response.status(500);
					response.send("Internal server error");
				} else {
					
					if(query.image != null) response.header('Content-Type', 'image/jpeg');
					else response.header('Content-Type', 'application/json');
					
					response.status(200);
					
					response.end(data);
				}
			});
		}
	}); 
	
}

exports.queryData = function(filename, query, response) {
		
	fs.access(filename, function(error, data) {
		if (error) {
			response.status(404);
			response.send("Not found");
		} else {
			fs.readFile(filename, function(error, data) {
				if (error) {
					response.status(500);
					response.send("Internal server error");
				} else {
					var result = {};
					var filteredData = [];
					var allData = JSON.parse(data);
					if (Array.isArray(allData.characters)){
						allData.characters.forEach(function(character) {
							
							var check = true;
							for(key in query){
								if(query[key] !== character[key]){
									check = false;
								}
							}
					
							if(check) filteredData.push(character);
						});
					}
					if (filteredData.length > 0) {		
						result.characters = filteredData;
						var imageUrl = 'images/' + query.type;
						if (query.type !== undefined) {
							response.header("Image-Url", 'http://localhost:8209/?image=' + query.type);
						}
						
					} else {
						response.status(404);
						response.send("Not Found");
					}
					
					response.status(200);
					response.json(result);
				}
			});
		}
	});
}