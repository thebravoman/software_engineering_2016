var express=require("express");
var router=express.Router();
var handle=require("../module/handler.js");
var url=require("url");
var http=require("http");

router.get('/', function(request, response, next) 
{
	var get_params=url.parse(request.url, true);
	if(get_params.query.image) 
	{
		console.log('./image/' + get_params.query.image + '.jpg');
		handle.image('./image/'+ get_params.query.image + '.jpg', response);
	} 
	else if(Object.keys(get_params.query).length) 
	{
		handle.data('./data/data.json', get_params.query, response);
	} 
	else 
	{
		handle.allData('./data/data.json', response);
	}
});

module.exports=router;
