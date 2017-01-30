var models = require('../model/character.js');
var Char = models.Character;
var port = 8105;
exports.provideList = function(res) {
    Char.find({}, function(error, res) {
        if (res != null) 
        {
            res.json(res);
        }
        if (error) 
        {
            return null;
        }
    })
}
exports.queryData = function(q_type, res) {
    Character.find({type: q_type}, function(error, res) {
        if (error)
        {
            return null;
        }
        if (res != null)
        {
            res.writeHead(200, {
                'Content-Type': 'aplication/json',
                'Image-Url': 'http://localhost:' + port + '/' + q_type + '/image'
            })
            res.end(JSON.stringify(res));
        }
    })
}
exports.saveCharacter = function(req, res) {
    var character = toCharacter(req.body);
    character.save(function(error) {
        if (!error)
        {
            res.writeHead(201, {
                'Content-Type': 'aplication/json'
            })
            res.end(JSON.stringify(req.body));
        }
        else
        {
            Character.findOne(
                {
                    firstname: character.firstname
                },
                function(error, res) {
                    if (error)
                    {
                        res.writeHead(500, {
                            'Content-Type': 'text/plain'
                        })
                        res.end('Internal Server Error')
                    }
                    else
                    {
                        if (!result)
                        {
                            character.save();
                            res.writeHead(201, {
                                'Content-Type': 'application/json'
                            })
                            res.end(JSON.stringify(req.body));
                        }
                        else
                        {
                            result.firstname = character.firstname;
                            result.lastname = character.lastname;
                            result.strength = character.strength;
                            result.type = character.type;
                            result.imageUrl = character.imageUrl;
                            result.save();
                            res.json(req.body);
                        }
                    }
                }
            )
        }
    })
}
exports.saveImage = function(req, res) {
    var writeStream = models.Grid.createWriteStream({
        _id: req.params.type,
        filename: 'image',
        mode: 'w'
    })
    writeStream.on('error', function(error) {
        res.send('500', 'Internal Server Error')
        return
    })
    writeStream.on('close', function() {
        var readStream = models.Grid.createReadStream({
            _id: req.params.type,
            filename: 'image',
            mode: 'r'
        })
        res.on('error', function(error) {
            res.send('500', 'Internal Server Error')
            return
        })
        res.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        readStream.pipe(res)
    })
    req.pipe(writeStream)
}
exports.getImage = function(req, res) {
    var readStream = models.Grid.createReadStream({
        _id: req.params.type,
        filename: 'image',
        mode: 'r'
    })
    
    readStream.on('error', function(error) {
        res.send('500', 'Internal Server Error')
        return
    })
    
    res.writeHead(200, {'Content-Type' : 'image/jpeg'})
    readStream.pipe(res)
}
function toCharacter(characterObject) {
    return new Character({
        firstname: characterObject.firstname,
        lastname: characterObject.lastname,
        strength: characterObject.strength,
        imageUrl: characterObject.imageUrl,
        type: characterObject.type
    })
}
