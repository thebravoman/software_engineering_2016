var express = require('express');
var router = express.Router();

var dbProvider = require('../modules/mongodb-provider.js');

router
	.get('/', function(request, response){
		dbProvider.provideList(response);
	})
	.post('/', function(request, response){
		dbProvider.saveCharacter(request, response);
	})
	.post('/:type/image', function(request, response){
		dbProvider.saveImage(request, response);
	})
	.get('/:type/image', function(request, response){
		dbProvider.getImage(request, response);
	})
	.get('/:type', function(request, response){
		dbProvider.queryData(request.query, request.params.type, response);
	});

module.exports = router;
