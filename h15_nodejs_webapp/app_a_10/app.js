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
	}
    	else if (params.query != null) 
    	{
        	for(var key in params.query)
        	{
            		dataProvider.queryData('./data/data.json',{'Content-Type': 'application/json'}, key, params.query[key], response);
       		}
	} 
    	else 
    	{
       	 	dataProvider.provideData('./data/data.json', {'Content-Type': 'application/json'}, response);
    	}
}

http.createServer(handleRequest).listen(port, hostname, function() {
    console.log("Listening in on" + port);
});
