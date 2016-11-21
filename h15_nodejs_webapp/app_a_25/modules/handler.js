var fs = require('fs');
var url = require('url');
var image = './image/image.jpeg';
var data = require('../data/data.json');

exports.handleRequest = function handleRequest(request, response) {
	if(Object.keys(url.parse(request.url, true).query).indexOf('image')) {
		response.writeHead(200, {
			'Content-Type': 'application/json',
			'Image-Url': 'http://localhost:8125?image' });
		response.end(JSON.stringify(data));
	} else {
		var img = fs.readFileSync(image);
		response.writeHead(200, { 'Content-Type': 'image/jpeg' });
		response.end(img, 'binary');
	}
};
