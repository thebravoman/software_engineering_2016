var http = require('http');
var url = require('url');
var content = require('content-type');

function Request_Handle(request, response) {
    content.format({type : "application/json"});
    response.end(JSON.stringify(url.parse(request.url, true).query, null, 2));
}

http.createServer(Request_Handle).listen(8118, '127.0.0.1');
