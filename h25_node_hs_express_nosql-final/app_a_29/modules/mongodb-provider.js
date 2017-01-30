var models = require('../model/character.js');

var Character = models.Character;

exports.getImage = function(req, res) {
	var readStream = models.Grid.createReadStream({
		_id : req.params.type,
		filename : 'image',
		mode : 'r'
	});

	readStream.on('error', function(error) {
		console.log('error read');
		console.log(error);
		response.send('500', 'Internal Server Error');
	});

	res.writeHead(200, {'Content-Type' : 'image/jpeg'});
	readStream.pipe(res);
}

exports.saveImage = function(req, res) {
	var writeStream = models.Grid.createWriteStream({
		_id : req.params.type,
		filename : 'image',
		mode : 'w'
	});

	writeStream.on('error', function(error) {
		res.send('500', 'Internal Server Error');
		console.log('error write');
	});

	writeStream.on('close', function() {
		var readStream = models.Grid.createReadStream({
			_id : req.params.type,
			filename : 'image',
			mode : 'r'
		});

		readStream.on('error', function(error) {
			console.log('error read');
			console.log(error);
			res.send('500', 'Internal Server Error');
		});

		res.writeHead(200, {'Content-Type' : 'image/jpeg'});
		readStream.pipe(res);
	});

	req.pipe(writeStream);
}

exports.SaveCharacter = function(req, res) {
	var character = parseCharacter(req.body);
	character.save(function(error) {
		if (!error) {
			res.writeHead(201, {
				'Content-Type' : 'application/json'
			});
			res.end(JSON.stringify(req.body));
		} else {
			Character.findOne({
				firstname : character.firstname
				}, function(error, result) {
					console.log('Check if such a character exists');
					if (error) {
						console.log(error);
						res.writeHead(500, {
							'Content-Type' : 'text/plain'
						});
						res.end('Internal Server Error');
					} else {
						if (result) {
							console.log('Character does not exist. Create new one');
							character.save();
							res.writeHead(201, {
								'Content-Type' : 'application/json'
							});
							res.end(JSON.stringify(req.body));
						} else {
							console.log('Character already exists. Will be updated');
							result.firstname = character.firstname;
							result.lastname = character.lastname;
							result.type = character.type;
							result.imageUrl = character.imageUrl;
							result.save();
							res.json(req.body);
						}
					}
				} 
			);
		}
	})
}

function parseCharacter(characterObject) {
	return new Character({
		firstname : characterObject.firstname,
		lastname : characterObject.lastname,
		strength : characterObject.strength,
		imageUrl : characterObject.imageUrl,
		type : characterObject.type

	});
}

exports.provideData = function(headers, queryType, res) {
	Character.find({type : queryType}, function(error, result) {
		if (error) {
			console.error(error);
			return null;
		}
		if (result != null) {
			res.writeHead(200, {
				'Content-Type' : 'application/json',
				'Image-Url' : 'http://localhost:8129/' + queryType + '/image'
			});
			res.end(JSON.stringify(result));
		}
	});
}

exports.provideList = function(res) {
	Character.find({}, function(error, result) {
		if (error) {
			console.error(error);
			return null;
		}
		if (result != null) {
			res.json(result);
		}
	});
}