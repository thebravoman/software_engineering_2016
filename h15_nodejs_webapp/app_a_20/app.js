var http = require('http');
var url = require('url');

var handler = require('./modules/handler.js');

var port = 8120;
var hostname = 'localhost'


function handleRequest(request, response) {
	console.log('GET on port: ' + port);
	
	var query = url.parse(request.url, true).query;
	
	if(query.image != null){
		handler.provideData('./image/image.jpg',{'Content-Type': 'image/jpeg'}, response);
	} else {
		handler.provideData('./data/data.json', {
			'Content-Type': 'application/json',
			'Image-Url': 'http://localhost:' + port + '?image'
		}, response);
	}
}

http.createServer(handleRequest).listen(port, hostname);