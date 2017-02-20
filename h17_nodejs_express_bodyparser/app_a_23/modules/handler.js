var fs = require('fs');
var url = require('url');
var port = 8123;

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
						response.set({
							'Content-Type': 'application/json',
							'Image-Url': 'http://localhost:' + port +
										 '/?image=' + result[0].type });
						response.json(JSON.stringify(result));
					} else {
						response.writeHead(404);
						response.end('Data not found');
					}
				} else {
					response.send('Internal Server Error');
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
					response.set({
						'Content-Type': 'application/json',
						'Image-Url': 'http://localhost:' + port + '?image' });
					response.json(JSON.stringify(JSON.parse(data)));
				} else {
					response.send('Internal Server Error');
				}
			});
		} else {
			response.end('Data not found');
		}
	});
};
