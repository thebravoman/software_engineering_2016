var http = require('http');
var url = require('url');
var contentType = require('content-type'); 

function handleRequest(request, response)
{
	contentType.format({type : "application/json"});
    var get_params = url.parse(request.url, true);
    var get_query = get_params.query;
    response.end(JSON.stringify(get_query, null, 2));
}
http.createServer(handleRequest).listen(8224, '127.0.0.1');
