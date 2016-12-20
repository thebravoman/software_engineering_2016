var express = require('express');
var router = express.Router();
var dataProvider = require('../modules/data-provider.js');

/* GET home page. */


//router.get('/', function(request, response, next){
	//console.log('Get all');
	//dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, response);
	
//});

router.get('/' , function (req , res , next){
	var url = req.query;
	
	console.log(url);

	var image = req.query.image;
	if ((image != null) && (url != null && url != ''))
	{
		console.log('Image request');
		console.log(image);
		dataProvider.provideData('images/'+image+'.jpg',{'Content-Type': 'image/jpeg'}, res);
	}
	else if (Object.keys(url).length)
	{
		console.log('Data requested');
		console.log(image);
		dataProvider.queryData('data/data.json', url, res);
	}
	else
	{
		console.log('асадс');
		dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, res);
	}
});

router.get('/all', function (res, req , next){
	//dataProvider.provideData('data/data.json',{'Content-Type': 'application/json'}, res);
});  
module.exports = router;
