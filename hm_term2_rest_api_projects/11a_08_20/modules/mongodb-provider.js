var models = require('../model/pet.js');

var Pet = models.Pet;


exports.allPets = function(response) {
  Pet.find({}, function(error, result) {
    if (error) {console.error(error); return null;}

    if (result != null) {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.json(result);
    }
  });
};

exports.findByName = function(headers, queryName, response) {
	Pet.find({name : queryName}, function(error, result) {
		if (error) {
			console.error(error);
			return null;
		}
		if (result != null) {
			response.writeHead(200, {'Content-Type':'application/json'});
			response.end(JSON.stringify(result));
		}
	});
};

exports.filter = function(req, res) {
	Pet.find({typeAnimal : req.query.typeAnimal, breed : req.query.breed},
    function(error, result) {
		if (error) {
			console.error(error);
			return null;
		}
		if (result != null) {
			res.writeHead(200, {'Content-Type':'application/json'});
			res.end(JSON.stringify(result));
		}
	});
};

exports.deletePet = function (req, res) {
  var pet = toPet(req.body);

  Pet.find({name : pet.name}, function(error, result) {
		if (error) {
			console.error(error);
			return null;
		}
		if (result != null) {
			res.writeHead(200, {'Content-Type':'application/json'});
			res.end(JSON.stringify(pet));
		}
	}).remove().exec();
}

exports.paginate = function(req, res) {
  let limit = 3;
  if (req.query.limit != null) limit = parseInt(req.query.limit);

  Pet.paginate({},
    {page:parseInt(req.params.page), limit:limit},
    function (error, pageCount, result, itemCount) {
        if(error) {
          console.log(error);
          res.writeHead('500', {'Content-Type' : 'text/plain'});
          res.end('Internal Server Error');
        }
        else {
          res.json({
            object : 'pets',
            pageCount : pageCount
          });
        }
    });
}

function toPet(petObject) {
	return new Pet({
    name: petObject.name,
    typeAnimal: petObject.typeAnimal,
    breed: petObject.breed,
    imageUrl: petObject.imageUrl,
    description: petObject.description,
    age: petObject.age,
    owner: petObject.owner
	});
}

exports.savePet = function(request, response) {
	var pet = toPet(request.body);

	pet.save(function(error) {
				if (!error) {
					response.writeHead(201, {'Content-Type' : 'application/json'});
					response.end(JSON.stringify(request.body));
				} else {
						Pet.findOne(
              {name : pet.name},

							function(error, result) {
								console.log('Check if such a pet exists');
								if (error) {
									console.log(error);
									response.writeHead(500, {'Content-Type' : 'text/plain'});
									response.end('Internal Server Error');
								} else {
									if (!result) {
										console.log('Pet does not exist. Create new one');
										character.save();
										response.writeHead(201, {'Content-Type' : 'application/json'});
										response.end(JSON.stringify(request.body));
									} else {
										console.log('Pet already exists will be updated');

                    result.name = pet.name;
										result.typeAnimal = pet.typeAnimal;
										result.breed = pet.breed;
										result.imageUrl = pet.imageUrl;
                    result.description = pet.description;
                    result.age = pet.age;
										result.owner = pet.owner;

										result.save();
										response.json(request.body);
									}
							}
					});
				}

		});
};
