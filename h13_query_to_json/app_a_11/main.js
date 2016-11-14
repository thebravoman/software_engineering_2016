var http = require('http');
var url = require('url');
// var contentType = require("content-type");

function handleRequest(request, response) {
    // contentType.format({type : "application/json"});
    var get_params = url.parse(request.url, true);
    response.end(JSON.stringify(get_params.query));
}

http.createServer(handleRequest).listen(8111, '127.0.0.1');
