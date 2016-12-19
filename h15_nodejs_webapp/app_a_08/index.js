const http=require("http");
const url=require("url");
const dataProvider=require("./handler/handler.js");
const hostname="localhost";
const port=8108;

function handleRequest(request, response)
{
	console.log("Getting" + port);
	var params=url.parse(request.url, true);

	if (params.query.image!=null)
	{
		dataProvider.provideData('./image/image.jpeg', {'Content-Type': 'image/jpeg'}, response);
	}
   else if (params.query!=null && Object.key(params.query).length>0) 
   {
      dataProvider.queryData('./data/data.json',{'Content-Type': 'application/json'}, params.query.type, response);
	} 
   else 
   { 
   	dataProvider.provideData('./data/data.json', {'Content-Type': 'application/json'}, response);
   }
}

http.createServer(handleRequest).listen(port, hostname, function() {
    console.log("Listening in on" + port);
});
