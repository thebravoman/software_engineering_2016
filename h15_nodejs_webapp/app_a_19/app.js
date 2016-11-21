var http = require('http');
var url = require('url');
var dataSource = require('./modules/data-provider.js');
var port = 8119;
var hostname = 'localhost';

function handleRequest(request, response)
{
	var get_params = url.parse(request.url, true);

	if (get_params.query.image == null)
		{
			dataSource.provideData('data/data.json',{'Content-Type': 'application/json','Image-Url': 'http://localhost:8119?image' }, response);
		}
		else
		{
			dataSource.provideData('images/image.png',{'Content-Type': 'image/png'}, response);
		}
}
http.createServer(handleRequest).listen(port, hostname);
