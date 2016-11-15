var http=require('http');

var url=require('url');

var content_type = require('content-type');

function handleRequest(request,response)
{
	var data=url.parse(request.url, true);
	content_type.format({type:"application/json"});
	response.end(JSON.stringify(data.query));
}


console.log('listening on localhost:8105');

http.createServer(handleRequest).listen(8105,'127.0.0.1');
