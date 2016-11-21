var http = require('http');
var url = require('url');
var handler = require('./modules/handler.js');

function handleRequest(request, response) {
	var param = url.parse(request.url,true).query;
	if(param.query.image != null) {
		handler.provide('./image/image.jpg', {'Content-Type': 'image/jpeg'}, response);
	}
	else
		handler.provide('./data/data.json', {'Content-Type':'application/json', 'Image-Url': 'http://localhost:8117?image'}, response);
}

http.createServer(handleRequest).listen(8117,'127.0.0.1');
