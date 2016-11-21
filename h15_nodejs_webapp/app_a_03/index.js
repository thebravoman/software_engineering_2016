var http = require('http');
var url = require('url');
var dataProvider = require('./modules/handle.js');

function handleRequest(request, response) {
	var obj=url.parse(request.url,true);
	if (obj.query.image != null) {
		
		dataProvider.dataProvider('image/image.jpeg',{'Content-Type': 'image/jpeg'}, response);
	}
	else {
		
		dataProvider.dataProvider('./data/data.json', {
            'Content-Type': 'application/json',
            'Image-Url':'http://localhost:8103/?image'
        }, response);
	}
	
	
}
http.createServer(handleRequest).listen(8103, 'localhost');