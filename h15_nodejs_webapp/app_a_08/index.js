var http=require("http");
var url=require("url");
var data=require("./handler/handler.js");

function handleGetRequest(request, response)
{
	console.log('Getting');
	var get_params=url.parse(request.url,true);
	if (get_params.query.image!=null)
	{
		data.provideData("./image/image.jpg", 
		{
			'Content-Type':'image/jpeg'
		}, response);
	}
	else
	{
		data.provideData("./data/data.json",
		{
			'Content-Type':'application/json',
			'Image-Url':'http://localhost:'+8108+'?image'
		}, response);
	}
}

http.createServer(handleGetRequest).listen(8108,'localhost',function()
{
	console.log('listening on','localhost',':',8108);
});
