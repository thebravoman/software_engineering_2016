var http = require('http');
var url = require('url');
var dataProvider = require('./modules/handler.js');

var port = 8109;
var hostname = 'localhost';

http.createServer(function(request, response)
{
	if (request.url ==='/favicon.ico')
	{
		console.log('Ignoring favicon request...');
	}
	else
	{	
		var get_params = url.parse(request.url, true);

		if (get_params.query.image != null)
		{
			dataProvider.provideData('images/image.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
		else
		{
			dataProvider.provideData('data/data.json',{'Content-Type': 'application/json', 'Image-Url': 'http://localhost:8109/?image'}, response);
		}
	}
}).listen(port, hostname);

console.log('Server started on ' + port);
console.log('Waiting for requests...');