var http = require('http');
var url = require('url');
var dataProvider = require('./modules/handler.js');
var port = 8105;
var hostname = 'localhost';

function handleRequest(request, response)
{
	
		var get_params = url.parse(request.url, true).query;
		console.log(Object.keys(get_params).length)	;
		console.log(get_params);
		if (get_params.image != null)
		{
		dataProvider.provide_resources('image/'+get_params.image+'.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
		else if ((Object.keys(get_params).length === 0))
		{
		dataProvider.provide_resources('data/data.json',{'Content-Type': 'application/json'}, response);		
		}
		else
		{
		dataProvider.queryData('./data/data.json',{'Content-Type': 'application/json'}, get_params, response);
		}

}
console.log("listening on 8105");
http.createServer(handleRequest).listen(port, hostname);
