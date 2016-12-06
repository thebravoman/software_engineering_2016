var http = require('http');
var url = require('url');
var dataProvider = require('./modules/handler.js');
var port = 8105;
var hostname = 'localhost';

function handleRequest(request, response)
{
	
		var get_params = url.parse(request.url, true);
		if (get_params.query.image != null)
		{
		dataProvider.provide_resources('image/'+get_params.query.image+'.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
		else if (get_params.query==null)
		{
		dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, response);
		}
		else
		{
		dataProvider.queryData('./data/data.json',{'Content-Type': 'application/json'}, get_params.query, response);
		}

}
console.log("listening on 8105");
http.createServer(handleRequest).listen(port, hostname);
