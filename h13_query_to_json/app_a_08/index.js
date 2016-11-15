var http=require("http");
var url=require("url");

function handleRequest(request, response)
{
	contentType.format({type:"application/json"});
	var data=url.parse(request.url,true);
	response.end(JSON.stringify(data.query));
}

http.createServer(handleRequest).listen(8108, '127.0.0.1');
