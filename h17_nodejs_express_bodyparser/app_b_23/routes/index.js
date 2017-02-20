var express = require('express');
var router = express.Router();
var dataProvider = require('../modules/data-provider.js');

router.get('/', function(request, response, next){
	if (request.url ==='/favicon.ico')
	{
		console.log('Ignore facicon request...');
	}
	else
	{	
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
	}
});

module.exports = router;
