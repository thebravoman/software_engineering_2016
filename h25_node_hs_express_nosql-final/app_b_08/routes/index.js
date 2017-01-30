var express = require('express');
var router = express.Router();
var dataProvider = require('../modules/data-provider.js');

var dbProvider = require('../modules/mongodb-provider.js');

/* GET home page. */


router.get('/', function(request, response, next){
	console.log('Get all');
	dbProvider.provideList(response);
	
});
router.post('/', function(request, response, next){
	dbProvider.saveCharacter(request, response);
});

router.post('/:type/image', function(request, response, next){
	dbProvider.saveImage(request, response);
});

router.get('/:type/image', function(request, response, next){
	dbProvider.getImage(request, response);

});

router.get('/:type', function(request, response, next){
	dbProvider.queryData({}, request.params.type, response);
});

module.exports = router;
