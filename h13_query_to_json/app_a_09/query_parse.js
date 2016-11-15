var http = require('http');
var url = require('url');
var contentType = require('content-type');
var port = 8109;

http.createServer(function(request, response)
{
	contentType.format({type: "application/json"});
	var queryObject = url.parse(request.url, true).query;
	response.end(JSON.stringify(queryObject, null, 2));
}).listen(port, '127.0.0.1');