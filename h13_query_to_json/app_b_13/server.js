var http = require('http');
var url = require('url');

http.createServer(function handler(req, res) {
	res.setHeader("Content-Type", "application/json");
	var get_data = url.parse(req.url, true);
    	res.end(JSON.stringify(get_data.query,null , 2));
}).listen(8213, '127.0.0.1');

