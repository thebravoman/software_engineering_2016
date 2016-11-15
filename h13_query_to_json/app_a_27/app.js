var URL = require('url');
var HTTP = require('http');
var contentType = require('content-type');
var port = 8127;

function Handle_GET_Request(request, response)
{
	contentType.format({type: "application/json" });
	
	var content = URL.parse(request.URL, true);

	response.end(JSON.stringify(content.query));
}

HTTP.createServer(Handle_GET_Request).listen(port, '127.0.0.1');