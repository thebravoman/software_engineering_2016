var http = require('http');
var url = require('url');
var content_type = require("content-type");

function handleRequest(request, response)
{
    content_type.format({type: "application/json"});
    var get_params = url.parse(request.url, true);
    response.end(JSON.stringify(get_params.query));
}

http.createServer(handleRequest).listen(8125, '127.0.0.1');
