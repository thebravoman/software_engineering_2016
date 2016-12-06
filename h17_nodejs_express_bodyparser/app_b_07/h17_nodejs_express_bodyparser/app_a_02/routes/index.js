
var express = require('express');
var router = express.Router();
var dataProvider = require('../modules/data-provider.js');


router.get('/', function(request, response, next){
	console.log('Get by type: ' + request.query.type);
	console.log('Image requested: ' + request.query.image);
	console.log(request.query);
	var image = request.query.image;
	var type = request.query.type;
	if (image != null)
	{
		console.log('Image request');
		console.log(image);
		if(image == '')
			image = 'image';
		dataProvider.provideData('images/'+image+'.jpg',{'Content-Type': 'image/jpeg'}, response);

	}
	else if (Object.keys(request.query).length > 0)
	{
		console.log('Data requested');
		console.log(image);
		dataProvider.queryData('data/data.json', request.query, response);

	}
	else
	{
		dataProvider.provideList('data/data.json', response);

	}
});

module.exports = router;
