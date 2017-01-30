var express = require('express');
var router = express.Router();

var dbProvider = require('../modules/mongodb-provider.js');

router
	.get('/', function(request, response, next){
		dbProvider.provideList(response);
	})
	.post('/', function(request, response, next){
		dbProvider.saveCharacter(request, response);
	})
	.post('/:type/image', function(request, response, next){
		dbProvider.saveImage(request, response);
	})
	.get('/:type/image', function(request, response, next){
		dbProvider.getImage(request, response);
	})
	.get('/:type', function(request, response, next){
		dbProvider.queryData({}, request.params.type, response);
	});

module.exports = router;
