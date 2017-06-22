const express = require('express');
const router = express.Router();
const Provider = require('../modules/doodles.js');

router.get('/', function(req, res, next) {
	if(req.query.limit && req.query.page) {
		Provider.paginate(req, res);
	}
	else {
		Provider.listAll(res);
	}
	
});

router.post('/create', function(req, res, next) {
	Provider.createDoodle(req, res);
});

router.get('/:category', function(req, res, next) {
	console.log("Get all by category");
	Provider.listCategory(req.params.category, res);
});

router.get('/:author/:name', function(req, res, next) {
	console.log("get doodle");
	Provider.getDoodle(req.params.author, req.params.name, res);
});

router.patch('/:author/:name', function(req, res, next) {
	console.log("update doodle");
	Provider.updateDoodle(req, res);
});

router.delete('/:author/:name', function(req, res, next) {
	console.log("delete doodle");
	Provider.deleteDoodle(req.params.author, req.params.name, res);

});

router.get('/:author/:name/image', function(req, res, next) {
	Provider.getImage(req.params.author, req.params.name, res);
});

router.get('/:author/:name/upvote', function(req, res, next) {
	console.log("upvote");
	Provider.voteDoodle(req.params.author, req.params.name, res);
});

router.get('/:author/:name/downvote', function(req, res, next) {
	console.log("downvote");
	Provider.downvoteDoodle(req.params.author, req.params.name, res);
});

module.exports = router;
