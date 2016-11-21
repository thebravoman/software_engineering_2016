
var http = require('http');
var url = require('url');
var data_handler = require('./modules/handler.js');

function request_handler(request, response)
{
	var object = url.parse(request.url, true);
	
	if(object.query.image == null)
	{
		data_handler.data_handler('./data/data.json',
		{
			'Content-Type': 'application/json',
			'Image-Url':'http://localhost:8113/?image'
		}, response);
	}
	
	else 
	{
		data_handler.data_handler('image/image.jpeg',
		{
			'Content-Type': 'image/jpeg'
		}, response);
	}
}

http.createServer(request_handler).listen(8113, 'localhost');
