let fs = require('fs');

function readData(filename, response) {
	console.log('providing ' + filename);
	fs.exists(filename, (exists) => {
		if (exists) {		
				fs.readFile(filename, (error, data) => {	
					if (!error)	{
						let headers = {
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
		else {
			response.status(404)
					.send('Image not found');
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
	let headers = {};

	fs.exists(filename, (exists) => {
		if (exists) {		
			fs.readFile(filename, (error, data) => {	
				if (!error)	{
					let result = {};
					let filteredData = [];
					let allData = JSON.parse(data);
					if (Array.isArray(allData.characters)){
						allData.characters.forEach((character) => {
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
						headers["Image-Url"] = 'http://localhost:8106/?image=' + query.type;
					}

					response.set(headers);
					response.json(result);
				}
				else {		
					response.status(404)
							.send('Internal Server Error');
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
