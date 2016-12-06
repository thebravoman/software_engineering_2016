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
		let query = url.parse(request.url, true).query;
		let get_params = url.parse(request.url, true);

		if (query.image != null)
		{
			dataProvider.provideData('images/'+query.image+'.jpg',{'Content-Type': 'image/jpg'}, response);
		}
		else if(Object.keys(get_params).length > 0)
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
