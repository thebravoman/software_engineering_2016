
var http = require('http');
var url = require('url');
var dataProvider = require('./modules/data_provider.js');

var port = 8119;
var hostname = 'localhost';

function handleRequest(request, response)
{
	
		var get_params = url.parse(request.url, true);
		if (get_params.query.image != null)
		{
			dataProvider.provideData('images/'+get_params.query.image+'.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
		else if (get_params.query)
		{

				dataProvider.provideData('./data/data.json',{'Content-Type': 'application/json'}, get_params.query, response);

		}
		else
		{
			dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, response);
		}

}
console.log('listening on host ' + port);
http.createServer(handleRequest).listen(port, hostname);
