var http = require('http');
var url = require('url');
var contentType = require('content-type'); 

function handle_request(request, response)
{
	contentType.format({type : "application/json"});
    var data = url.parse(request.url, true);
    var query = data.query;
    response.end(JSON.stringify(query, null, 2));
}

http.createServer(handle_request).listen(8224, '127.0.0.1');
