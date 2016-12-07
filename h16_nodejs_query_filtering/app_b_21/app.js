var http = require('http');
var url = require('url');
var dataProvider = require('./modules/data-provider.js');

var port = 8221;
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
		
		if (get_params.query.image != null)
		{
			dataProvider.provideData('images/'+get_params.query.image+'.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
<<<<<<< HEAD
		else if (Object.keys(get_params.query).length)
=======
		else if (Object.keys(get_params.query).lenght)
>>>>>>> 9ef9e612d4fb7fbbcff66076b9c5fcd7d65004d5
		{
			dataProvider.queryData('data/data.json',{'Content-Type': 'application/json'},get_params.query, response);
		}
		else
		{
			dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, response);
		}
	}
}

http.createServer(handleRequest).listen(port, hostname);

