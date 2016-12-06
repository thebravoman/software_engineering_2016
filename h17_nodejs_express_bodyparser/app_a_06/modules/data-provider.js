let fs = require('fs');

function readData(filename, response) {
	console.log('providing ' + filename);
	fs.exists(filename, (exists) => {
		if (exists) {		
				fs.readFile(filename, (error, data) => {	
					if (!error)	{
						response.send(data);
					}
					else {			
						response.send('Internal Server Error');
					}
				});
		}
		else {
			response.send('Image not found');
		}
	});	
}



exports.provideData = function(filename, contentType, response) {
	readData(filename,contentType, response);
};

exports.provideList = function(filename,  response) {
	readData(filename,contentType, response);
};

exports.queryData = function(filename, headers, query, response) {
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
						headers["Image-Url"] = 'http://localhost:8180/?image=' + query.type;
					}
					
						
					response.set(headers);
					response.send(JSON.stringify(result));
				}
				else {			
					response.send('Internal Server Error');
				}
			});
		}
		else
		{
			response.end('Image not found');
		}
	});	
};