var url = require('url');
var http = require('http');
var contentType = require('content-type');


function Request_Handle(request, response) {

     contentType.format({type : "application/json"});
     var get_data = url.parse(request.url, true);
	  	var data_query = get_data.query;
     response.end(JSON.stringify(data_query, null, 2));

}


http.createServer(Request_Handle).listen(8214, '127.0.0.1');
