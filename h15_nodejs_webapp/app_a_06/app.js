let http = require('http');
let url = require('url');
let dataProvider = require('./modules/data-provider.js');

let port = 8180;
let hostname = 'localhost';

function handleRequest(request, response)
{
	if (request.url ==='/favicon.ico')
	{
		console.log('Ignore facicon request...');
	}
	else
	{	
		let get_params = url.parse(request.url, true);

		if (get_params.query.image != null)
		{
			dataProvider.provideData('images/'+get_params.query.image+'.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
		else if (Object.keys(get_params).length > 0)
		{
			dataProvider.queryData('data/data.json',{'Content-Type': 'application/json'}, get_params.query, response);
		}
		else
		{
			dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, response);
		}
	}
}

http.createServer(handleRequest).listen(port, hostname);

