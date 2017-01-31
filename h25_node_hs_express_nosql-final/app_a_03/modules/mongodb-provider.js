   var assign = require('lodash/assign');
var models = require('../model/character.js');

var Character = models.Character;

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


exports.queryData = function(headers, request, response) {
	var SrcQuerry = assign(request.params, request.query);
	Character.find(SrcQuerry, function(error, result) {
		if (error) {
			console.error(error);
			return null;
		}
		if (result != null) {
			response.writeHead(200, {
				'Content-Type':'application/json',
				'Image-Url':'http://localhost:8103/'+ request.params.type + '/image'});
			response.end(JSON.stringify(result));
		}
		
	});

};

exports.saveCharacter = function(request, response)
{
	var character = toCharacter(request.body);
	character
			.save(function(error) {
				if (!error) {
					response.writeHead(201, {
						'Content-Type' : 'application/json'
					});
					response.end(JSON.stringify(request.body));
				} else {
					Character
							.findOne(
									{
										firstname : character.firstname
									},
									function(error, result) {
										if (error) {
											console.log(error);
											response.writeHead(500, {
												'Content-Type' : 'text/plain'
											});
											response.end('Internal Server Error');
										} else {
											if (!result) {
												console
														.log('Character does not exist. Create new one');
												character.save();
												response.writeHead(201, {
													'Content-Type' : 'application/json'
												});
												response.end(JSON.stringify(request.body));
											} else {
												
												result.firstname = character.firstname;
												result.lastname = character.lastname;
												result.type = character.type;
												result.imageUrl = character.imageUrl;
                        result.lastname = character.lastname;
												result.save();
												response.json(request.body);
											}
											
										}
									});
				}
			});
};

function toCharacter(characterObject) {
	return new Character({
		firstname : characterObject.firstname,
		lastname : characterObject.lastname,
		strength : characterObject.strength,
		imageUrl : characterObject.imageUrl,
		type : characterObject.type

	});
}

exports.saveImage = function(request, response) {	
	var writeStream = models.Grid.createWriteStream({
		filename: request.params.type,
		mode : 'w'
	});
	
	writeStream.on('error', function(error) {
		response.send('500', 'Internal Server Error');
		console.log('error write');
		return;
	})
	
	writeStream.on('close', function() {
		var readStream = models.Grid.createReadStream({
			filename : request.params.type,
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

	var options = 
	{	
		filename : request.params.type,
		mode : 'r'
	}

	models.Grid.exist(options, function (err, found) {
	  if (err) 
	  {	
		throw err;
	  }
	  if (found) 
	  {
	  	var readStream = models.Grid.createReadStream(options);
	
		readStream.on('error', function(error) {
			console.log('error read');
			console.log(error);
			response.send('500', 'Internal Server Error');
			return;
		});

		response.writeHead(200, {'Content-Type' : 'image/jpeg'});
		readStream.pipe(response);
	  } else {
	  	response.status(404).end();
	  }
	});
	
	
};
