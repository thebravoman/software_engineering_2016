var express = require('express');
var router = express.Router();
var dataProvider = require('../modules/dataProvider.js');

/* GET home page. */


router.get('/', function(request, response, next){

    const query = request.query
    // console.log("test");
	if ((query.image != null)) {
        response.set("jpeg").contentType("image/jpeg").send(dataProvider.provideRawData('public/images/'+query.image+'.jpeg', response));
	}
	else if (query != null && Object.keys(query).length > 0)
	{
        console.log("query");
		response.set("json").status(200).send(dataProvider.queryData('public/data/data.json', query, response));
	}
	else
	{
        console.log("list");
		response.json(dataProvider.provideList(response));
	}
});

// router.get('/:type', function(request, response, next){
// 	console.log('Get by type: ' + request.params.type);
// 	console.log('Image requested: ' + request.query.image);
// 	console.log(request.query);
// 	var image = request.query.image;
// 	var type = request.params.type;
//
// 	if ((image != null) && (type != null && type != '')) {
// 		console.log('Image request');
// 		console.log(image);
// 		response.set("jpeg").status(200).contentType("image/jpeg").send(dataProvider.provideRawData('public/images/'+type+'.jpeg', response));
// 	}
// 	else if (type != null && type != '')
// 	{
// 		console.log('Data requested');
// 		console.log(image);
// 		response.set("json").status(200).send(dataProvider.queryData('public/data/data.json', request.params.type, response));
// 	}
// 	else
// 	{
// 		response.json(dataProvider.provideList(response));
// 	}
// });

module.exports = router;
