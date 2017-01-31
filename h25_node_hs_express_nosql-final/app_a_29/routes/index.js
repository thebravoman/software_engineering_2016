var express = require('express');
var dbProvider = require('../modules/mongodb-provider.js');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log('Get all');
	dbProvider.provideList(res);
});

router.post('/', function(req, res, next) {
	dbProvider.saveCharacter(req, res);
});

router.post('/:type/image', function(req, res, next) {
	dbProvider.saveImage(req, res);
});

router.get('/:type/image', function(req, res, next) {
	dbProvider.getImage(req, res);
});

router.get('/:type', function(req, res, next) {
	dbProvider.provideData({}, req.params, res);
});

function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

module.exports = router;
