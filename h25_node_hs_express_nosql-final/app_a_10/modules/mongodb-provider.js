var models = require('../model/character.js')
var Character = models.Character
var port = 8110

exports.provideList = function(response) 
{
	Character.find({}, function(error, result) 
	{
		if (error) 
		{
			return null;
		}
		if (result != null) 
		{
			response.json(result);
		}
	});
};

exports.queryData = function(headers, queryType, response) 
{
	let searchTerms = {type: queryType};
	searchTerms = require('util')._extend(searchTerms, headers);

	Character.find(searchTerms, function(error, result)
	{
		if (error) 
		{
			return null;
		}
		if (result.length == 0) 
		{
			response.writeHead(404, "text/plain").end("character not found");
		}
		else
		{
			response.writeHead(200,
			{
				'Content-Type': 'aplication/json',
				'Image-Url': 'http://localhost:' + port + '/' + queryType + '/image'
            		});
			response.end(JSON.stringify(result));
		}
	
	});
}

exports.saveCharacter = function(request, response)
{
	let character = toCharacter(request.body);
	Character.findOne({firstname: character.firstname}, function(error, result)
	{
		if (error)
		{
			response.writeHead(500,
			{
				'Content-Type': 'text/plain'
			});
			response.end('Internal Server Error');
			return
		}
		else
		{
			if (result)
			{
				result.firstname = character.firstname;
				result.lastname = character.lastname;
				result.type = character.type;
				result.imageUrl = character.imageUrl;
				result.strength = character.strength;
				result.save(function(error)
				{
					if (error)
					{
						response.writeHead(500, {'Content-Type': 'text/plain'});
						response.end('Internal Server Error');
					}
					else
					{
						response.json(request.body);
					}

				});
			}
			else
			{
				character.save(function(error)
				{
					if (error)
					{
						response.writeHead(500, {'Content-Type': 'text/plain'});
						response.end('Internal Server Error');
					}
					else
					{
						response.json(request.body);
					} 
				});
			}
		}
	});
};

exports.saveImage = function(request, response) 
{
	var writeStream = models.Grid.createWriteStream(
	{
		_id: request.params.type,
		filename: request.params.type + ".jpg",
		mode: 'w'
	});

	writeStream.on('error', function(error) 
	{
		response.send('500', 'Internal Server Error');
		return;
	});

	writeStream.on('close', function() 
	{
		var readStream = models.Grid.createReadStream
		({
			_id: request.params.type,
			filename: request.params.type + ".jpg",
			mode: 'r'
		});

		response.on('error', function(error) 
		{
			response.send('500', 'Internal Server Error');
			return;
		});

		response.writeHead(200, {'Content-Type': 'image/jpeg'});
		readStream.pipe(response);
	});
	request.pipe(writeStream);
}

exports.getImage = function(request, response)
{
	models.Grid.exist
	({
		filename: request.params.type + ".jpg"
	},
	function(err, found)
	{
		if (err)
		{
			response.writeHead(500, {'Content-Type': 'text/plain'});
			response.end('Internal Server Error');
		}
		if (found)
		{
			var readStream = models.Grid.createReadStream
			({
				_id: request.params.type,
				filename: request.params.type + ".jpg",
				mode: 'r'
			});
			readStream.on('error', function(error)
			{
				response.send('500', 'Internal Server Error');
				return;
			});
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			readStream.pipe(response);
		}
		else
		{
			response.writeHead(404, {'Content-Type': 'text/plain'});
			response.end('Image not found');
		}
	});
};

function toCharacter(characterObject) 
{
	return new Character
	({
		firstname: characterObject.firstname,
		lastname: characterObject.lastname,
		imageUrl: 'http://localhost:' + port + '/' + queryType + '/image',
		type: characterObject.type
	});
}
