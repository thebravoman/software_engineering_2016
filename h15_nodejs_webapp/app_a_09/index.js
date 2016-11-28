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
		const query = url.parse(request.url, true).query;

		if (query.image != null)
		{
			dataProvider.provideData('images/'+query.image+'.jpg',{'Content-Type': 'image/jpg'}, response);
		}
		else if(query != null && Object.keys(query).length > 0)
		{
			dataProvider.queryData('data/data.json',{'Content-Type': 'application/json'}, query, response);
		}
		else
		{
			dataProvider.provideList('data/data.json', {'Content-Type': 'application/json'}, response);
		}
	}
}).listen(port, hostname);

console.log('Server started on ' + port);
console.log('Waiting for requests...');
