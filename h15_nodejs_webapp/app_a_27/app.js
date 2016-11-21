var http = require('http');
var url = require('url');
var data_handler = require('./modules/handler.js');
var host = 'localhost';

function Handle_Get_Request(request, response)
{
	var parametres = url.parse(request.url, true).query;

	if (parametres.image == null) {
		data_handler.Provide_Data('data/data.json', {"Content-Type" : "application/json",
								"Image-Url" : "http://localhost:8127?image"},response);
		

	} else {
		data_handler.Provide_Data("image/image.jpg", {"Content-Type" : "image/jpeg"}, response);
		
	}
}

http.createServer(Handle_Get_Request).listen(8127, host);
