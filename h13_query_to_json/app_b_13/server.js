var http = require('http');
var url = require('url');
var contentType = require('content-type'); 
http.createServer(function handler(req, res) {
	contentType.format({type : "application/json"});
	var get_data = url.parse(req.url, true);
    	res.end(JSON.stringify(get_data.query,null , 2));
}).listen(8213, '127.0.0.1');

