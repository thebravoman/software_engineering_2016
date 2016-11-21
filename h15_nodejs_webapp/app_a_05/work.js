var http = require('http');
var url = require('url');
var handler = require('./modules/handler.js');
var port=8105;
function handleRequest(request, response) {
    var param = url.parse(request.url, true);
    if (param.query.image == null) 
	{
		handler.data('./data/data.json', {
		    'Content-Type': 'application/json',
		    'Image-Url': 'http://localhost:' + port + '?image'
		}, response);
	    
	} 
    else 
	{
        handler.data('./image/image.jpg', {'Content-Type': 'image/jpeg'}, response);
	}
}
    http.createServer(handleRequest).listen(port, 'localhost');
    console.log('listening on 127.0.0.1 :', port);
