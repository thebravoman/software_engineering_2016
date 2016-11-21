const http = require("http");
const url = require("url");
const dataProvider = require("./modules/handler.js");
const port = 8110;
const hostname = "localhost";

function handleRequest(request, response)
{
	console.log("Getting" + port);
	var params = url.parse(request.url, true);

	if (params.query.image != null)
	{
		dataProvider.provideData('./image/image.jpeg', {'Content-Type': 'image/jpeg'}, response);
	}else{
		dataProvider.provideData('./data/data.json', {
            		'Content-Type': 'application/json',
            		'Image-Url': 'http://localhost:' + port + '?image'
		}, response);
    	}
}

http.createServer(handleRequest).listen(port, hostname, function() {
    console.log("Listening in on" + port);
});
