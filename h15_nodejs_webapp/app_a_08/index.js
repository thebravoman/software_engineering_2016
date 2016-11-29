var http=require("http");
var url=require("url");
var data=require("./handler/handler.js");

function handleGetRequest(request, response)
{
	console.log('Getting');
	var get_params=url.parse(request.url,true);
	if (get_params.query.image!=null)
	{
		data.provideData('./image/'+get_params.quer.image+'jpg', 
		{
			'Content-Type':'image/jpeg'
		}, response);
	}
	else if (get_params.query)
	{
		data.queryData("./data/data.json",
		{
			'Content-Type':'application/json',
		}, get_params.query, response);
	}
	else
	{
		data.provideList('./data/data.json',
		{
			'Content-Type':'application/json'
		}, response);
	}
}

http.createServer(handleGetRequest).listen(8108,'localhost');
