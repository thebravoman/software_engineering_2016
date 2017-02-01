var http = require('http');
var url = require('url');
var dataProvider = require('./modules/data-provider.js');

var port = 8180;
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
			dataProvider.provideData('images/'+get_params.query.image+'.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
		else if (get_params.query.type != null && get_params.query.type != null)
		{
			dataProvider.queryData('data/data.json',{'Content-Type': 'application/json'}, get_params.query.type, response);
		}
		else
		{
			dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, response);
		}
	}
}

http.createServer(handleRequest).listen(port, hostname);

