var express = require('express');
var path = require('path');
var router = express.Router();

var dbProvider = require('../modules/mongodb-provider.js');

/* GET home page. */

router.get('/test', function(request, response, next){
  response.sendFile(path.join(__dirname, '../views/layouts', 'list.html'));
})

router.get('/index', function(request, response, next){
  response.sendFile(path.join(__dirname, '../views/layouts', 'react-details.html'));
});

router.get('/', function(request, response, next){
  response.sendFile(path.join(__dirname, '../views/layouts', 'jq-list.html'));
});

router.get('/all', function(request, response, next){
  console.log('Get all');
  dbProvider.allPets(response);
});

router.post('/delete', function(request, response, next){
  dbProvider.deletePet(request, response);
});

router.get('/pet/:name', function(request, response, next){
  console.log("Find pet by name: " + request.params.name);
	dbProvider.findByName({}, request.params.name, response);
});

//filters by typeAnimal & breed
// localhost:3000/filter?typeAnimal=doggo&breed=labrador
router.get('/filter', function(request, response, next){
  console.log("Filter by type animal: " + request.query.typeAnimal);
  console.log("Filter by breed: " + request.query.breed);
	dbProvider.filter(request, response);
});

router.get('/:page', function(request, response, next){
  console.log('Page: ' + request.params.page);
  console.log('Limit: ' + request.query.limit);
  dbProvider.paginate(request, response);
});

router.post('/', function(request, response, next){
  dbProvider.savePet(request, response);
});

module.exports = router;
