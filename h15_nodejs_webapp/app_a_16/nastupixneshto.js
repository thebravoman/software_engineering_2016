var http = require('http');
var url  = require('url');
var dataProvider = require('./modules/data-provider.js');

var port = 8116;
var hostname = 'localhost';

function handleRequest(request, response)
{
		var request_data = url.parse(request.url, true);
		if(request_data.query.image != null)
		{
			dataProvider.provideData('images/image.jpg',{'Content-Type': 'image/jpeg'}, response);
		}		else
		{
			dataProvider.provideData('./data/data.json', {'Content-Type': 'application/json','Image-Url':'http://localhost:8116/?image'}, response);
		}
}

console.log('Listening on localhost:8116');

http.createServer(handleRequest).listen(port, hostname);
