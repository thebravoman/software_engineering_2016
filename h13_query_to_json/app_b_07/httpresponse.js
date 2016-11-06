var http = require('http');
var url = require('url');
var server = http.createServer(handleRequest);
function handleRequest(request, response){
    response.end(JSON.stringify((url.parse(request.url, true)).query,null,2));
}
server.listen(8207);
