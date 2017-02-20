
var http = require('http');
var url = require('url');
var requestHandler = require('./modules/.js');

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
			dataProvider.provideData('images/image.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
		if else
		{
			dataProvider.provideData('data/data.json',{'Content-Type': 'application/json', 'Image-Url': 'http://localhost:8215/?image'}, 																																	response);
		}
		else{
				dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, response);		
		}
	}
}
http.createServer(requestHandler.requestHandler).listen(8205, 'localhost');


