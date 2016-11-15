var url = require('url');
var http = require('http');
var contentType=require('content-type');

function handle_get_Request(request, response) {

 response.writeHead(200, {
                'Content-Type' : 'application/json'        
            });      
	

	contentType.format({type: "application/json"});
	var obj={};
	obj=url.parse(request.url, true);	
	response.end(JSON.stringify(obj.query,null,1));
	
}



http.createServer(handle_get_Request).listen(8103, '127.0.0.1');
