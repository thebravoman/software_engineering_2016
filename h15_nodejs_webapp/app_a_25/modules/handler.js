var fs = require('fs');
var url = require('url');

exports.image = function image(filename, response) {
	fs.exists(filename, function(exists) {
		if (exists) {
			var img = fs.readFileSync(filename);
			response.writeHead(200, { 'Content-Type': 'image/jpeg' });
			response.end(img, 'binary');
		} else {
			response.writeHead(404);
			response.end('Image not found');
		}
	});
};
exports.data = function data(filename, query, response) {
	fs.exists(filename, function(exists) {
		if(exists) {
			fs.readFile(filename, function(error, data) {
				if(!error) {
					var result = {};
					var filteredData = [];
					var i = 0;
					var allData = JSON.parse(data);
					if(Array.isArray(allData.characters)){
						if(query) {
							allData.characters.forEach(function(character) {
								i = 0;
								for(key in query) {
									if(character[key] === query[key]) {
										i++;
									}
									if(i == Object.keys(query).length) {
										filteredData.push(character);
									}
								}
							});
						}
					}
					if(filteredData.length > 0) {
						result = filteredData;
						response.writeHead(200, {
							'Content-Type': 'application/json',
							'Image-Url': 'http://localhost:8125/?image=' + result[0].type });
						response.end(JSON.stringify(result));
					} else {
						response.writeHead(404);
						response.end('Data not found');
					}
				} else {
					response.writeHead(500);
					response.end('Internal Server Error');
				}
			});
		} else {
			response.writeHead(404);
			response.end('Data not found');
		}
	});
};
exports.allData = function(filename, response) {
	fs.exists(filename, function(exists) {
		if(exists) {
			fs.readFile(filename, function(error, data) {
				if(!error) {
					response.writeHead(200, {
						'Content-Type': 'application/json',
						'Image-Url': 'http://localhost:8125?image' });
					response.end(JSON.stringify(JSON.parse(data)));
				} else {
					response.writeHead(500);
					response.end('Internal Server Error');
				}
			});
		} else {
			response.writeHead(404);
			response.end('Data not found');
		}
	});
};
