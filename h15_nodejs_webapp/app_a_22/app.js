var url = require('url');
var http = require('http');
var datapr = require('./modules/dataprovider.js');
var port = 8122;
var host = 'localhost';

function handleGETRequest(request, response) {
	var content = url.parse(request.url, true);

	if (content.query.image != null) {
		datapr.provideData('images/gloves.jpg',{'Content-Type': 'image/jpeg'}, response);
	}
	else if (content.query.data != null) {
		datapr.provideData('data/data.json',{'Content-Type': 'application/json'}, response);
	}
	else {
		datapr.provideData('data/data.json',{'Content-Type': 'application/json'}, response);
	}	
	
}

http.createServer(handleGETRequest).listen(port, host);