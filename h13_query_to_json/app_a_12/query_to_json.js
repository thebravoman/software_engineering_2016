var http = require('http');
var url = require('url');

function handleRequest(request, response)
{
    let query = url.parse(request.url, true).query;
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(query, null, 4));
}


http.createServer(handleRequest).listen(8112, '127.0.0.1');
