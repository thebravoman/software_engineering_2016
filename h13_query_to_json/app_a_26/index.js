
var url = require('url');
var http = require('http');
var port = 8126;

var contentType = require("content-type");

function GetRequest(request, response){

      var queryArguments = url.parse(request.url, true);

    response.writeHead(200, {
    		'Content-Type' : 'application/json'
      });

    response.end(JSON.stringify(queryArguments.query));


}


http.createServer(GetRequest).listen(port, '127.0.0.1');
