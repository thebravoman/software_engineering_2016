
var http = require('http');
var url = require('url');
var dataProvider = require('./modules/data_provider.js');

	var get_params = url.parse(request.url, true);
		if (get_params.query.image != null && get_params.query.image != null)
		{
			dataProvider.provideData('images/image.jpg',{'Content-Type': 'image/jpeg'}, response);
		}
		else
		{
			dataProvider.provideData('data/data.json',{'Content-Type': 'application/json', 'Image-Url': 'http://localhost:8215/?image'}, 																																	response);
}

http.createServer(requestHandler.requestHandler).listen(8215, 'localhost');


