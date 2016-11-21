var http = require('http');
var url  = require('url');
var dataProvider = require('./modules/data-provider.js');

var port = 8116;
var hostname = 'localhost';

function handleRequest(request, response)
{
	if(request.url == '/favicon.ico')
	{
		console.log('FAVICON REQUEST -> IGNORE');
	}
	else
	{
		var request_data = url.parse(request.url, true);
		if(request_data.query.image != null)
		{
			dataProvider.provideData('images/image.jpg',{'Content-Type': 'image/jpeg'}, response);
		}		else
		{
			dataProvider.provideData('data/data.json',{'Content-Type': 'application/json'}, response);
		}
	}
}

http.createServer(handleRequest).listen(port, hostname);
