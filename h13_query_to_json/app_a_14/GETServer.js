const http = require("http");
const url = require("url");
const contentType = require("content-type");

function GETRequest(request, response){
	response.writeHead(200,{
		"Content-Type": "application/json"
	});
	let params = url.parse(request.url, true);
	response.end(JSON.stringify(params.query, null, 4));
}

function handleRequest(request, response) {
	if(request.method == "GET") {
		GETRequest(request, response);
	}
	else{
		response.writeHead(204);
		response.end();
	}
}

http.createServer(handleRequest).listen(8114, '127.0.0.1');
console.log("ASDF");
