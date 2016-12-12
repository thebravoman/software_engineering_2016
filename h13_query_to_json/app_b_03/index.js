var http = require('http');
var url = require('url');

var port = 8203

function handleRequest(request, response)
{

    var get_params = url.parse(request.url, true);
    var params = JSON.stringify(get_params.query, null, 2);
    response.writeHead(200, {
        'Content-Type' : 'application/json'
    });
    response.end(params);
}


console.log('listening on localhost:' + port + '\n ...');


http.createServer(handleRequest).listen(port, '127.0.0.1');
