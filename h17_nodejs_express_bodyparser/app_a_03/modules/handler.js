var fs = require('fs');

function readData(filename, contentType, response) {
    console.log('providing ' + filename);
    fs.exists(filename, function (exists) {
        if (exists) {
            fs.readFile(filename, function (error, data) {
                if (!error) {
                    response.type(contentType);
                    response.send(data);
                }
                else {
                    response.status(500);
                    response.send('Internal Server Error');
                }
            });
        }
        else {
            response.status(404);
            response.send('Image not found');
        }
    });
}


exports.provideData = function (filename, contentType, response) {
    readData(filename, contentType, response);
};

exports.provideList = function (filename, contentType, response) {
    readData(filename, contentType, response);
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
						headers["Image-Url"] = 'http://localhost:8103/?image=' + query.type;
					}
					
					response.set(headers);
					response.json(result);
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
