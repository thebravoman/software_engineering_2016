var http = require('http');
var url = require('url');
var data = require('./modules/data_provider.js');

function requestHandler(request, responce) {
	var get_params = url.parse(request.url, true);
	if (get_params.query.image != null && get_params.query.image != null) {
		data.provideData('images/image.jpg',{'Content-Type': 'image/jpeg'}, response);
	}
	else
	{
		data.provideData('data/data.json',{'Content-Type': 'application/json', 'Image-Url': 'http://localhost:8118/?image'}, response);
	}
}

http.createServer(requestHandler).listen(8118, 'localhost');


