/**
 * New node file
 */
var fs = require('fs');
var url = require('url');

function readData(filename, request, response)
{
	console.log('providing ' + filename);
	fs.exists(filename, function(exists) {
		if (exists) {
				fs.readFile(filename, function(error, data) {
					if (!error)	{
                        response.set(200);
                        var get_params = url.parse(request.url, true);
                        if(get_params.query.image != null && get_params.query.image != null) {
                            response.header('content-type', 'image/jpeg');
                        } response.end(data);
					}
					else {
						response.set(500);
						response.end('Internal Server Error');
					}
				});
		}
		else
		{
			response.set(404);
			response.end('Image not found');
		}
	});
}



exports.provideData = function(filename, request, response)
{
	readData(filename, request, response);
};

exports.provideList = function(filename, request, response)
{
	readData(filename, request, response);
};

exports.queryData = function(filename, query, response) {
	var queryJSON = JSON.parse(JSON.stringify(query));

	fs.exists(filename, function(exists) {
		if (exists) {
				fs.readFile(filename, function(error, data) {
					if (!error)	{
						var result = {};
						var filteredData = [];
						var allData = JSON.parse(data);
						if (Array.isArray(allData.characters)){
							allData.characters.forEach(function(character) {
								var isPrintable = true;
								Object.keys(character).forEach(function(key) {
									if(queryJSON[key] !== undefined) {
										if(queryJSON[key] !== character[key]) {
											isPrintable = false;
										}
									}
								});

								if (isPrintable) {
									filteredData.push(character);
								}
							});
						}

						if (filteredData.length > 0) {
							result[queryJSON.type] = filteredData;
							var imageUrl = 'images/' + queryJSON.type;
							response.header("Image-Url", 'http://localhost:8208/?image='+queryJSON.type);
                        }


						response.set(200);
						response.json(filteredData);
					}
					else {
						response.set(500);
						response.end('Internal Server Error');
					}
				});
		}
		else
		{
			response.sendStatus(404);
			response.end('Image not found');
		}
	});
};
