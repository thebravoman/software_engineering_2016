// var models = require('../model/character.js')
//
// var Character = models.Character
//
// var port = 8101
//
// exports.provideList = function(response) {
//   Character.find({}, function(error, result) {
//     if (error) {
//       return null
//     }
//     if (result != null) {
//       response.json(result)
//     }
//   })
// }
//
// exports.queryData = function(queryType, response) {
// Character.find({type: queryType}, function(error, result) {
//   if (error) {
//     return null
//   }
//   if (result != null) {
//     response.writeHead(200, {
//     'Content-Type': 'aplication/json',
//     'Image-Url': 'http://localhost:' + port + '/' + queryType + '/image'
//   })
//     response.end(JSON.stringify(result))
// }//else{
// //     response.writeHead(404)
// //     response.end('Image not find')
// // }
// })
// }
//
//   exports.saveCharacter = function(request, response) {
// var character = toCharacter(request.body)
//   character.save(function(error) {
// if (!error) {
//   response.writeHead(201, {
// 'Content-Type': 'aplication/json'
// })
//   response.end(JSON.stringify(request.body))
// } else {
//   Character.findOne(
// {
// firstname: character.firstname
// },
// function(error, result) {
// if (error) {
// response.writeHead(500, {
// 'Content-Type': 'text/plain'
// })
// response.end('Internal Server Error')
// } else {
// if (!result) {
//   character.save()
//   response.writeHead(201, {
//   'Content-Type': 'application/json'
// })
// response.end(JSON.stringify(request.body))
// } else {
//   result.firstname = character.firstname
//   result.lastname = character.lastname
//   result.strength = character.strength
//   result.type = character.type
//   result.imageUrl = character.imageUrl
//   result.save()
//   response.json(request.body)
// }
// }
// }
// )
// }
// })
// }
//
// exports.saveImage = function(request, response) {
// var writeStream = models.Grid.createWriteStream({
// _id: request.params.type,
// filename: 'image',
// mode: 'w'
// })
//
// writeStream.on('error', function(error) {
// response.send('500', 'Internal Server Error')
// return
// })
//
// writeStream.on('close', function() {
// var readStream = models.Grid.createReadStream({
// _id: request.params.type,
// filename: 'image',
// mode: 'r'
// })
//
// response.on('error', function(error) {
// response.send('500', 'Internal Server Error')
// return
// })
//
// response.writeHead(200, {
// 'Content-Type': 'image/jpeg'
// })
// readStream.pipe(response)
// })
//
// request.pipe(writeStream)
// }
//
// exports.getImage = function(request, response) {
// var readStream = models.Grid.createReadStream({
// _id: request.params.type,
// filename: 'image',
// mode: 'r'
// })
//
// readStream.on('error', function(error) {
// response.send('500', 'Internal Server Error')
// return
// })
//
// response.writeHead(200, {'Content-Type' : 'image/jpeg'})
// readStream.pipe(response)
// }
//
// // function toCharacter(characterObject) {
// // return new Character({
// // firstname: characterObject.firstname,
// // lastname: characterObject.lastname,
// // strength: characterObject.strength,
// // imageUrl: characterObject.imageUrl,
// // type: characterObject.type
// // })
// // }
// var assign = require('lodash/assign')
// var models = require('../model/character.js')
//
// var Character = models.Character
//
// var port = 8111
//
// exports.provideList = function(response) {
//     Character.find({}, function(error, result) {
//         if (error) {
//             return null
//         }
//         if (result != null) {
//             response.json(result)
//         }
//     })
// }
//
// exports.queryData = function(request, response) {
//     var searchQuery = assign(request.params, request.query)
//
//     Character.find(searchQuery, function(error, result) {
//         if (error) {
//             response.send('500', 'Internal Server Error')
//             return
//         }
//         if (result.length > 0) {
//             response.writeHead(200, {
//                 'Content-Type': 'aplication/json',
//                 'Image-Url': 'http://localhost:' + port + '/' + request.params.type + '/image'
//             })
//             response.end(JSON.stringify(result))
//         } else {
//             response.send('404', 'Data not found')
//         }
//     })
// }
//
// exports.saveCharacter = function(request, response) {
//     var character = toCharacter(request.body)
//     character.save(function(error) {
//         if (!error) {
//             response.writeHead(201, {
//                 'Content-Type': 'aplication/json'
//             })
//             response.end(JSON.stringify(request.body))
//         } else {
//             Character.findOne(
//                     {
//                         firstname: character.firstname
//                     },
//                     function(error, result) {
//                         if (error) {
//                             response.writeHead(500, {
//                                 'Content-Type': 'text/plain'
//                             })
//                             response.end('Internal Server Error')
//                         } else {
//                             if (!result) {
//                                 character.save()
//                                 response.writeHead(201, {
//                                     'Content-Type': 'application/json'
//                                 })
//                                 response.end(JSON.stringify(request.body))
//                             } else {
//                                 result.firstname = character.firstname
//                                 result.lastname = character.lastname
//                                 result.strength = character.strength
//                                 result.type = character.type
//                                 result.imageUrl = character.imageUrl
//                                 result.save()
//                                 response.json(request.body)
//                             }
//                         }
//                     }
//                 )
//         }
//     })
// }
//
// exports.saveImage = function(request, response) {
//     var writeStream = models.Grid.createWriteStream({
//         filename: request.params.type,
//         mode: 'w'
//     })
//
//     writeStream.on('error', function(error) {
//         response.send('500', 'Internal Server Error')
//         return
//     })
//
//     writeStream.on('close', function() {
//         var readStream = models.Grid.createReadStream({
//             filename: request.params.type,
//             mode: 'r'
//         })
//
//         response.on('error', function(error) {
//             response.send('500', 'Internal Server Error')
//             return
//         })
//
//         response.writeHead(200, {
//             'Content-Type': 'image/jpeg'
//         })
//         readStream.pipe(response)
//     })
//
//     request.pipe(writeStream)
// }
//
// exports.getImage = function(request, response) {
//     var options = {
//         filename: request.params.type,
//         mode: 'r'
//     }
//
//     models.Grid.exist(options, function (err, found) {
//         if (err) {
//             response.send('500', 'Internal Server Error')
//             return
//         }
//         if (found) {
//             var readStream = models.Grid.createReadStream(options)
//
//             readStream.on('error', function(error) {
//                 response.send('500', 'Internal Server Error')
//                 return
//             })
//
//             response.writeHead(200, {'Content-Type' : 'image/jpeg'})
//             readStream.pipe(response)
//         } else {
//             response.status(404).end()
//         }
//     })
// }
//
// function toCharacter(characterObject) {
//     return new Character({
//         firstname: characterObject.firstname,
//         lastname: characterObject.lastname,
//         strength: characterObject.strength,
//         imageUrl: characterObject.imageUrl,
//         type: characterObject.type
//     })
// }
var assign = require('lodash/assign')
var models = require('../model/character.js')

var Character = models.Character

var port = 8101

exports.provideList = function(response) {
Character.find({}, function(error, result) {
    if (error) {
        return null
    }
    if (result != null) {
        response.json(result)
    }
})
}

exports.queryData = function(request, response) {
var searchQuery = assign(request.params, request.query)

Character.find(searchQuery, function(error, result) {
    if (error) {
        response.send('500', 'Internal Server Error')
        return
    }
    if (result.length > 0) {
        response.writeHead(200, {
            'Content-Type': 'aplication/json',
            'Image-Url': 'http://localhost:' + port + '/' + request.params.type + '/image'
        })
        response.end(JSON.stringify(result))
    } else {
        response.send('404', 'Data not found')
    }
})
}

exports.saveCharacter = function(request, response) {
var character = toCharacter(request.body)
character.save(function(error) {
    if (!error) {
        response.writeHead(201, {
            'Content-Type': 'aplication/json'
        })
        response.end(JSON.stringify(request.body))
    } else {
        Character.findOne(
                {
                    firstname: character.firstname
                },
                function(error, result) {
                    if (error) {
                        response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    })
                    response.end('Internal Server Error')
                } else {
                    if (!result) {
                        character.save()
                        response.writeHead(201, {
                            'Content-Type': 'application/json'
                        })
                        response.end(JSON.stringify(request.body))
                    } else {
                        result.firstname = character.firstname
                        result.lastname = character.lastname
                        result.strength = character.strength
                        result.type = character.type
                        result.imageUrl = character.imageUrl
                        result.save()
                        response.json(request.body)
                    }
                }
            }
        )
    }
})
}

exports.saveImage = function(request, response) {
    var writeStream = models.Grid.createWriteStream({
        filename: request.params.type,
        mode: 'w'
    })

    writeStream.on('error', function(error) {
        response.send('500', 'Internal Server Error')
        return
    })

    writeStream.on('close', function() {
        var readStream = models.Grid.createReadStream({
            filename: request.params.type,
            mode: 'r'
        })

        response.on('error', function(error) {
            response.send('500', 'Internal Server Error')
            return
        })

        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        readStream.pipe(response)
    })

    request.pipe(writeStream)
}

exports.getImage = function(request, response) {
    var options = {
        filename: request.params.type,
        mode: 'r'
    }

    models.Grid.exist(options, function (err, found) {
        if (err) {
            response.send('500', 'Internal Server Error')
            return
        }
        if(found){
            var readStream = models.Grid.createReadStream(options)

            readStream.on('error', function(error) {
                response.send('500', 'Internal Server Error')
                return
            })

            response.writeHead(200, {'Content-Type' : 'image/jpeg'})
            readStream.pipe(response)
        }else{
            response.status(404).end()
        }
    })
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
