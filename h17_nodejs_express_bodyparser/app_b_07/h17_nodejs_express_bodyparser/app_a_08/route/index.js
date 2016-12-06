var express=require("express");
var router = express.Router();
var handle = require("../module/handler.js");
var url = require("url");
var http = require("http");

router.get('/', function(req, res, next) 
{
	handle.allData('./data/data.json', response);
});

router.get('/:type', function(request, response, next) 
{
	var get_params=url.parse(request.url, true);
	if('image' in get_params.query) 
	{
		handle.image('./image' + get_params.pathname + '.jpg', response);
	} 
	else if(Object.keys(get_params.query).length) 
	{
		handle.data('./data/data.json', request.params.type, response);
	} 
	else 
	{
		handle.allData('./data/data.json', response);
	}
});

module.exports=router;
