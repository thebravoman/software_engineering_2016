var http = require('http');
var url = require('url');
var Data = require('./modules/handler.js');

function handleRequest(request, response)
{
	console.log('Listening..');
	var params = url.parse(request.url, true)
	if (params.query.image != null)
	{
		Data.providе('image/image.jpg', {'Content-Type': 'image/image.jpg', 'Image-Url' : 'http://localhost:8121?image'}, response);
	}
	else
		Data.provide('data/data.json', {'Content-Type': 'application/json', 'Image-Url' : 'http://localhost:8121?image'}, response);
}

http.createServer(handleRequest).listen('8121', 'localhost');
