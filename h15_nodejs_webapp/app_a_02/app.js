var http = require('http');
var url = require('url');
var dataProvider = require('./modules/data-provider.js');

var port = 8102;
var hostname = 'localhost';

function handleRequest(request, response)
{


	var get_params = url.parse(request.url, true);

	if (get_params.query.image == null)
		{
			dataProvider.provideData('data/data.json',{'Content-Type': 'application/json','Image-Url': 'http://localhost:8102?image' }, response);
		}
		else
		{
			dataProvider.provideData('images/image.jpg',{'Content-Type': 'image/jpeg'}, response);
		}



}
http.createServer(handleRequest).listen(port, hostname);
