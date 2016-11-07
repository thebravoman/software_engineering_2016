var protocol_ = require('http');
var locator_ = require('url');
var cntnt_type = require('content-type');

function protocol_req(req, resp)
{
	cntnt_type.format({type : "application/json"});
	var data_ = url.parse(req.url, true);
	resp.end(JSON.stringify(data_.query, null, 2));	
}

http.createServer(protocol_req).listen(8206, '127.0.0.1');
