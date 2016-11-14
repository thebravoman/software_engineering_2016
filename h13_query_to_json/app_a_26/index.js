
var url = require('url');
var http = require('http');
var port = 8126;

var contentType = require("content-type");

function GetRequest(request, response){

    contentType.format( {type: "application/json" } );

    var queryArguments = url.parse(request.url, true);

    response.end(JSON.stringify(content.query));


}


http.createServer(GetRequest).listen(port, '127.0.0.1');
