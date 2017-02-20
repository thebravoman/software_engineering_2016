var URL = require('url');
var HTTP = require('http');
var port = 8127;

function Handle_GET_Request(request, response)
{
	var content = URL.parse(request.URL, true);
	
	response.writeHead(200, {
        'Content-Type': 'application/json'
	});

	response.end(JSON.stringify(content.query));
}

HTTP.createServer(Handle_GET_Request).listen(8127, '127.0.0.1');
