fs = require('fs');

function readData(filename, response) {
	console.log('providing ' + filename);
	fs.exists(filename, (exists) => {
		if (!exists) {		
				response.status(404)
					.send('Image not found');
		}
		else {
				fs.readFile(filename, (error, data) => {	
					if (!error)	{
						var headers = {
							"Content-Type": "image/jpeg"
						}

						response.set(headers);
						response.end(data);
					}
					else {			
						response.status(404)
								.send('Internal Server Error');
					}
				});

		}
	});	
}



exports.provideData = function(filename, response) {
	readData(filename, response);
};

exports.provideList = function(filename,  response) {
	readData(filename, response);
};

exports.queryData = function(filename, query, response) {
	var headers = {};

	fs.exists(filename, (exists) => {
		if (exists) {		
			fs.readFile(filename, (error, data) => {	
				if(error){		
					response.status(404)
							.send('Internal Server Error');
				}				
				else{
					var res = {};
					var filter = [];
					var Data = JSON.parse(data);
					if (Array.isArray(Data.characters)){
						Data.characters.forEach((character) => {
							var match = true;
							for(var key in query){
								if(query[key] != character[key]){
									match = false;
									break;
								}
							}
							if(match){
								filter.push(character);
							}
						});
					}
					if (filter.length > 0) {
						res = filter;
						var imageUrl = 'images/' + query.type;
						headers["Image-Url"] = 'http://localhost:8105/?image=' + query.type;
					}

					response.set(headers);
					response.json(res);
				} 
			});
		}
		else
		{
			response.status(404)
					.end('Image not found');
		}
	});	
};
