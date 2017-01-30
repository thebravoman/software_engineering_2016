const models = require('../model/character.js');

const Character = models.Character;

exports.provideList = function(response) {
	Character.find({}, function(error, result) {
		if (error) {
			console.error(error);
			return null;
		}
		if (result != null) {
			response.json(result);
		}
	});

};


exports.queryData = function(headers, queryType, response) {
	Character.find({type : queryType}, function(error, result) {
		if (error) {
			console.error(error);
			return null;
		}
		if (result != null) {
			response.writeHead(200, {
				'Content-Type':'application/json',
				'Image-Url':'http://localhost:8114/'+ queryType + '/image'});
			response.end(JSON.stringify(result));
		}
	});
};

exports.saveCharacter = function(request, response) {
	let character = toCharacter(request.body);
	console.log(character);
	Character.findOne({firstname : character.firstname}, function(error, result) {
		if (error) {
			console.log(error);
			response.writeHead(500, {
				'Content-Type' : 'text/plain'
			});
			response.end('Internal Server Error');
			return
		}
		else {
			if (!result) {
				console.log('Character does not exist. Create new one');
				character.save(function(error) {
					if (!error) {
						response.json(request.body);
					} 
					else {
						response.writeHead(500, {'Content-Type' : 'text/plain'});
						console.log("Failure saving new character");
						response.end('Internal Server Error');
					}
				});
			}
			else {
				console.log('Character already exists will be updated');
				result.firstname = character.firstname;
				result.lastname = character.lastname;
				result.type = character.type;
				result.imageUrl = character.imageUrl;
				result.strength = character.strength;
				result.save(function(error) {
					if (!error) {
						response.json(request.body);
					} 
					else {
						response.writeHead(500, {'Content-Type' : 'text/plain'});
						console.log("Failure updating character");
						response.end('Internal Server Error');
					}
				});
			}
		}
	});
};


exports.saveImage = function(request, response) {
	console.log("Creating write stream for type " + request.params.type);
	var writeStream = models.Grid.createWriteStream({
		_id : request.params.type,
		filename : request.params.type + ".jpg",
		mode : 'w'
	});
	
	writeStream.on('error', function(error) {
		response.send('500', 'Internal Server Error');
		console.log('error write');
		return;
	})
	
	writeStream.on('close', function() {
		var readStream = models.Grid.createReadStream({
			_id : request.params.type,
			filename : request.params.type + ".jpg",
			mode : 'r'
		});
		
		readStream.on('error', function(error) {
			console.log('error read');
			console.log(error);
			response.send('500', 'Internal Server Error');
			return;
		});
		
		response.writeHead(200, {'Content-Type' : 'image/jpeg'});
		readStream.pipe(response);
	});
	
	request.pipe(writeStream);

};

exports.getImage = function(request, response) {
	console.log(request.params.type);
	models.Grid.exist({
			filename : request.params.type + ".jpg"
		}, function(err, found) {
		if (err) {
			response.writeHead(500, {'Content-Type' : 'text/plain'});
			console.log("Failure checking if image exists");
			response.end('Internal Server Error');
		}
		if (!found) {
			response.writeHead(404, {'Content-Type' : 'text/plain'});
			console.log("Image not found");
			response.end('Image not found');
		}
		else {
			var readStream = models.Grid.createReadStream({
				_id : request.params.type,
				filename : request.params.type + ".jpg",
				mode : 'r'
			});
			readStream.on('error', function(error) {
				console.log('error read');
				console.log(error);
				response.send('500', 'Internal Server Error');
				return;
			});
			response.writeHead(200, {'Content-Type' : 'image/jpeg'});
			readStream.pipe(response);
		}
	});
};

function toCharacter(characterObject) {
	return new Character({
		firstname : characterObject.firstname,
		lastname : characterObject.lastname,
		strength : characterObject.strength,
		imageUrl : 'http://localhost:8114/' + characterObject.type + '/image',
		type : characterObject.type

	});
}
