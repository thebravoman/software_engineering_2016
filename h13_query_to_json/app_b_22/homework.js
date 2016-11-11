var http = require('http');
var url = require('url');
var contentType = require('content-type');
function http_request(request, response)
{
	contentType.format({type : "application/json"});
	var requestData = url.parse(request.url, true);
	response.end(JSON.stringify(requestData.query,null , 2));
}
http.createServer(http_request).listen(8222, '127.0.0.1'); 
