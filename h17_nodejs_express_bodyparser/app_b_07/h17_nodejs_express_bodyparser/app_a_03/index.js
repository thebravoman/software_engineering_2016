var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var http = require('http');
var dataProvider = require('./modules/handler.js');

var port = 8103;

var app = express();

app.use(bodyParser.json());

var router = express.Router();
router.get('/', function(request, response, next){
	
	
	var get_params = request.query;
	if (get_params.image)
	{
		dataProvider.provideData('images/'+get_params.image+'.jpg', {"Content-Type":"image/pgn"}, response);
	}
	else if (Object.keys(get_params).length)
	{
		dataProvider.queryData('data/data.json', get_params, response);
	}
	else
	{
		dataProvider.provideList('data/data.json', "json", response);
	}

});

app.use('/', router);

http.createServer(app).listen(8103, 'localhost');
