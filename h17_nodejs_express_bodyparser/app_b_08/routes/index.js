var express = require('express');
var router = express.Router();
var url = require('url');
var dataProvider = require('../modules/data-provider.js');

/* GET home page. */
router.get('/', function(request, response, next) {
    if (request.url ==='/favicon.ico')
  	{
  		console.log('Ignore facicon request...');
  	}
  	else
  	{
  		var get_params = url.parse(request.url, true);
  		if (get_params.query.image != null && get_params.query.image != null)
  		{
  			dataProvider.provideData('images/'+get_params.query.image+'.jpg', request, response);
  		}
  		else if (Object.keys(get_params.query).length > 0)
  		{
  			dataProvider.queryData('data/data.json', get_params.query, response);
  		}
  		else
  		{
  			dataProvider.provideList('data/data.json', request, response);
  		}
  }
});

module.exports = router;
