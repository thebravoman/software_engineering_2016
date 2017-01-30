var express = require('express');
var router = express.Router();
var db = require('../modules/mongodb-provider.js');

router.get('/', function(req, res, next) {
    db.provideList(res);
})

router.post('/', function(req, res, next) {
    db.saveCharacter(req, res);
})

router.post('/:type/image', function(req, res, next) {
    db.saveImage(req, res);
})

router.get('/:type/image', function(req, res, next) {
    db.getImage(req, res);
})

router.get('/:type', function(req, res, next) {
    db.queryData(req.params.type, res);
})

module.exports = router;
