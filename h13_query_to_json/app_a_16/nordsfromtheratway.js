var http = require('http');
var url = require('url');
var content_type = require("content-type");

function handleRequest(request, response) {
    var urldata = url.parse(request.url, true);
    content_type.format({type: "application/json"});
    response.end(JSON.stringify(urldata.query));
}

http.createServer(handleRequest).listen(8116, '127.0.0.1');
