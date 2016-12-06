var http = require('http');
var url = require('url');
var fs = require('fs');
var handler = require('./modules/handler');


function handleRequest(request, response)
{
	
    var query = url.parse(request.url, true).query;
    var headers = handler.getHeaders();
    
    
    var requestBody = handler.getRequestBody();
    var callback = function(result){
    	response.writeHead(result.statusCode, headers);
     	response.end(result.data);  	
    }
    var requestData = handler.queryData(query, callback);
}


http.createServer(handleRequest).listen(8112, '127.0.0.1');
