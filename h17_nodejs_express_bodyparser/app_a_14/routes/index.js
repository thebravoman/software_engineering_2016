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


module.exports = router;
