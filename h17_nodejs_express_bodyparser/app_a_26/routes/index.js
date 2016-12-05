var express = require('express');
var router = express.Router();
var handle = require("../modules/querryHandle.js");
/* GET home page. */

router.get('/', function(req, res, next)
{
	handle.jsonOut('data/data.json',{'Content-Type': 'application/json'}, res);
});

router.get('/:type', function(request, response, next)
{
	console.log('Type: ' + request.params.type);
	console.log('Image: ' + request.query.image);
	console.log(request.query);

	var img = request.query.image;
	var type = request.params.type;

	if(img != null && (type != '' && type != null))
	{
		console.log('Image requested');
		console.log(img);
		handle.data('images/' + type + '.jpg', {'Content-Type': 'image/jpeg'}, response);
	}

	else if(type != '' && type != null)
	{
		console.log('Data requested');
		handle.query('data/data.json',{'Content-Type': 'application/json'}, request.params.type, response);
	}
	else
	{
	   handle.jsonOut('data/data.json',{'Content-Type': 'application/json'}, response);
	}
});


module.exports = router;
