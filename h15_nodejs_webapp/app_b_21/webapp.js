/**
 * http://usejsdoc.org/
 */
var http = require('http');
var url = require('url');
var dataProvider = require('./modules/data.js');
var port = 8221;

function handlingRequest(request, response)
{
	var get_params = url.parse(request.url, true);	
	if (get_params.query.image != null)
	{
		dataProvider.provideData('./images/image.jpg' , {'Content-Type': 'image/jpeg'} , response);
	}
	else {
			dataProvider.provideData('./data/data.json', {
					'Content-Type': 'application/json',
					'Image-Url': 'http://localhost:8221/?image'
			}, response);
		}	
}	
http.createServer(handlingRequest).listen(port, 'localhost');
