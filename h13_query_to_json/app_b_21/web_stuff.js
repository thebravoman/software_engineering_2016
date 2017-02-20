/**
 * http://usejsdoc.org/
 */
require("http").createServer(function (request, response)
{
	response.setHeader("Content-Type", "application/json");
	var get_params = require("url").parse(request.url, true);	
	response.end(JSON.stringify(get_params.query,null,2));
}).listen(8221, '127.0.0.1');