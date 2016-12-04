var url = require('url');
var fs = require('fs');

function provideData(filename, contentType, response) {
	
	fs.access(filename, function(error, data) {
		
		if (error) {
			response.writeHead(404);
			response.end("Not found");
		} else {
			fs.readFile(filename, function(error, data) {
				if (error) {
					response.writeHead(500);
					response.end("Internal server error");
				} else {
					response.writeHead(200, contentType);
					response.end(data);
				}
			});
		}
	}); 
	
}

function queryData(filename, headers, query, response) {
	
	Query = JSON.parse(JSON.stringify(query));
	
	fs.access(filename, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.end("Not found");
		} else {
			fs.readFile(filename, function(error, data) {
				if (error) {
					response.writeHead(500);
					response.end("Internal server error");
				} else {
					var result = {};
					var filteredData = [];
					var allData = JSON.parse(data);
					if (Array.isArray(allData.characters)){
						allData.characters.forEach(function(character) {
							
							var check = true;
							for(key in Query){
								if(Query[key] !== character[key]){
									check = false;
								}
							}
					
							if(check) filteredData.push(character);
						});
					}
					if (filteredData.length > 0) {
						result.characters = filteredData;
						var imageUrl = 'images/' + query.type;
						headers["Image-Url"] = 'http://localhost:8209/?image=' + query.type;
					}
					
						
					response.writeHead(200, headers);
					response.end(JSON.stringify(result));
				}
			});
		}
	});
}

exports.processGETRequest = function(request, response) {
	var get_parametres = url.parse(request.url, true);
	
	if(get_parametres.query.image != null) {
		provideData('images/' + get_parametres.query.image + '.jpg',
				   {'Content-Type': 'image/jpeg'},
				   response);
	} else if(Object.keys(get_parametres.query) != null) {
		queryData('data/data.json',{'Content-Type': 'application/json'}, get_parametres.query, response);
	} else {
		provideData('data/data.json',{'Content-Type': 'application/json'}, response);
	}
};
