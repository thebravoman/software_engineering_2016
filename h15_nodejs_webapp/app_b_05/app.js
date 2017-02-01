
var http = require('http');
var url = require('url');
var dataProvider = require('./modules/data_provider.js');
function requestHandler(request, response) {
	var get_params = url.parse(request.url, true);
		if (get_params.query.image != null && get_params.query.image != null)
		{
			dataProvider.provideData('image/image.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
		else
		{
			dataProvider.provideData('data/data.json',{'Content-Type': 'application/json', 'Image-Url': 'http://localhost:8215/?image'}, response);
		}
}

http.createServer(requestHandler).listen(8205, 'localhost');
