var url = require('url');
var http = require('http');
var content_type = require("content-type");


function GETrequestor(request, response)
{
	content_type.format({type: "application/json"});
	var GETdata = url.parse(request.url, true);
	response.end(JSON.stringify(GETdata.query, null , 2));
}
http.createServer(GETrequestor).listen(8113, '127.0.0.1');
