var http = require('http');
var url = require('url');
var dataProvider = require('./modules/data-provider.js');

var port = 8203;
var hostname = 'localhost';

function handleRequest(request, response)
{
	if (request.url ==='/favicon.ico')
	{
		console.log('Ignore facicon request...');
	}
	else
	{	
		var get_params = url.parse(request.url, true);
		if (get_params.query.image != null && get_params.query.image != null)
		{
			dataProvider.provideData('images/image.jpg',{'Content-Type': 'image/jpeg',  'Image-Url':'http://localhost:8203/?image'}, response);
		}
		else if (get_params.query.data != null && get_params.query.data != null)
		{
			dataProvider.provideData('data/data.json',{'Content-Type': 'application/json',  'Image-Url':'http://localhost:8203/?image'}, response);
		}
		else
		{
			dataProvider.provideData('data/data.json',{'Content-Type': 'application/json',  'Image-Url':'http://localhost:8203/?image'}, response);
		}
	}
}

http.createServer(handleRequest).listen(port, hostname);
