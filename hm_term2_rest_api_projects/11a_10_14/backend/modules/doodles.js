const database = require('../database/database.js');
const inspect = require('util').inspect;
const Busboy = require('busboy');
let fs = require('fs');

const Doodle = database.Doodle;

const Provider = {
	listAll(response) {
		Doodle.find({}, (err, result) => {
			if(err) {
				response.writeHead(500, {
					"Content-Type":"plain/text"
				});
				response.end("Internal server error");
			}
			else {
				if(result) {
					response.status(200).json(result);
				}
				else {
					response.writeHead(404, {
						"Content-Type": "plain/text"
					});
					response.end("No doodles found");
				}
			}
		});
	},
	listCategory(category, response) {
		Doodle.find({category: category}, (err, result) => {
			if(err) {
				response.writeHead(500, {
					"Content-Type":"plain/text"
				});
				response.end("Internal server error");
			}
			else {
				response.status(200).json(result);
			}
		});
	},
	getDoodle(author, name, response) {
		Doodle.findOne({name: name, author: author}, (err, result) => {
			if(err) {
				response.writeHead(500, {
					"Content-Type":"plain/text"
				});
				response.end("Internal server error");
			}
			else {
				if(result) {
					result.image_url = 'http://localhost:3000/doodles/' + author + '/' + name + '/image';
					response.status(200).json(result);
				}
				else {
					response.writeHead(404, {
						"Content-Type":"plain/text"
					});
					response.end("Doodle not found");
				}
			}
		});
	},
	getImage(author, name, response) {
		Doodle.findOne({name: name, author: author}, (err, result) => {
			if(err) {
				console.log(err);
				response.writeHead(500, {
					"Content-Type":"plain/text"
				});
				response.end("Internal server error");
			}
			else {
				if(result) {
					const readStream = fs.createReadStream("storage/"+result._id + ".png");
					readStream.on('open', () => {
						response.writeHead(200, {
							"Content-Type":"image/png"
						});
						readStream.pipe(response);
					});
					readStream.on('finish', () => {
					});
					readStream.on('error', (err) => {
						console.log(err);
						response.writeHead(500, {
							"Content-Type":"plain/text"
						});
						response.end("Internal server error");
					});
				}
				else {
					response.writeHead(404, {
						"Content-Type":"plain/text"
					});
					response.end("Doodle not found");
					
				}
			}
		});
	},
	createDoodle(request, response) {
		const busboy = new Busboy({headers: request.headers});
		const doodle = {};
		busboy.on('file', (fieldName, file) => {
			file.pipe(fs.createWriteStream("temp.png"));
		});
		busboy.on('field', (fieldName, val) => {
			console.log(fieldName);
			console.log(val);
			doodle[fieldName] = val;
		});
		busboy.on('finish', () => {
			if(!doodle.name || !doodle.author) {
				response.writeHead(400, {
					"Content-Type":"plain/text"
				});
				response.end("Bad request");
			}
			console.log(doodle);
			Doodle.findOne({name: doodle.name, author: doodle.author}, (err, result) => {
				if(err) {
					console.log(err);
					response.writeHead(500, {
						"Content-Type":"plain/text"
					});
					response.end("Internal server error");
				}
				else {
					if(result) {
						response.writeHead(400, {
							"Content-Type":"plain/text"
						});
						response.end("Bad request");
					}
					else {
						let newDoodle = new Doodle({
							name : doodle.name,
							description : doodle.description,
							category : doodle.category,
							tags : doodle.tags.split(","),
							author: doodle.author,
							votes: 0
						});
						fs.rename("temp.png", "storage/" + newDoodle._id + ".png", (err) => {
							if(err) {
								console.log(err);
								response.writeHead(500, {
									"Content-Type":"plain/text"
								});
								response.end("Internal server err");
							}
							else {
								newDoodle.save((err) => {
									if(err) {
										fs.unlinkSync("storage/" + newDoodle._id + ".png");
										response.writeHead(500, {
											"Content-Type":"plain/text"
										});
										response.end("Internal server err");
									}
									else {
										newDoodle.image_url = 'http://localhost:3000/doodles/' + newDoodle_.author + '/' + newDoodle_.name + '/image';
										response.json(newDoodle);
									}
								});
							}
						});
					}
				}
			});
		});

		request.pipe(busboy);
		
	},
	updateDoodle(request, response) {
		const oldName = request.params.name;
		const oldAuthor = request.params.author;
		const name = request.body.name;
		const description = request.body.description;
		const tags = request.body.tags;
		const category = request.body.category;
		const author = request.body.author;
		if(!name || !description || !tags || !category || !author) {
			response.writeHead(400, {
				"Content-Type": "plain/text"
			});
			response.end("Bad request");
		}
		Doodle.findOne({name: oldName, author: oldAuthor}, (err, result) => {
			if(err) {
				response.writeHead(500, {
					"Content-Type":"plain/text"
				});
				response.end("Internal server error");
			}
			else {
				if(result) {
					result.author = author;
					result.name = name;
					result.description = request.body.description;
					result.tags = request.body.tags;
					result.category = request.body.category;
					result.save((err) => {
						if(err) {
							response.writeHead(500, {
								"Content-Type":"plain/text"
							});
							response.end("Internal server error");
						}
						else {
							response.status(200).json(result);
						}
					});
				}
				else {
					
				}
			}
		});
	},
	deleteDoodle(author, name, response) {
		Doodle.findOneAndRemove({author: author, name:name}, (err, result) => {
			if(err) {
				response.writeHead(500, {
					"Content-Type":"plain/text"
				});
				response.end("Internal server error");
			}
			else {
				if(result) {
					fs.unlinkSync("storage/" + result._id + ".png");
					response.status(204).end();
				}
				else {
					response.writeHead(404, {
						"Content-Type": "plain/text"
					})
					response.end("Doodle not found");
				}
			}
		});
	},
	voteDoodle(author, name, response) {
		Doodle.findOne({author: author, name: name}, (err, result) => {
			if(err) {
				response.writeHead(500, {
					"Content-Type":"plain/text"
				});
				response.end("Internal server error");
			}
			else {
				if(result) {
					result.votes++;
					result.save((err) => {
						if(err) {
							response.writeHead(500, {
								"Content-Type":"plain/text"
							});
							response.end("Internal server error");
						}
						else {
							response.status(204).end();
						}
					});
				}
				else {
					response.writeHead(404, {
						"Content-Type": "plain/text"
					})
					response.end("Doodle not found");
					
				}
			}
		});
	},
	downvoteDoodle(author, name, response) {
		Doodle.findOne({author: author, name: name}, (err, result) => {
			if(err) {
				response.writeHead(500, {
					"Content-Type":"plain/text"
				});
				response.end("Internal server error");
			}
			else {
				if(result) {
					result.votes--;
					result.save((err) => {
						if(err) {
							response.writeHead(500, {
								"Content-Type":"plain/text"
							});
							response.end("Internal server error");
						}
						else {
							response.status(204).end();
						}
					});
				}
				else {
					response.writeHead(404, {
						"Content-Type": "plain/text"
					})
					response.end("Doodle not found");
					
				}
			}
		});
		
	},
	paginate(request, response) {
		const page = parseInt(request.query.page);
		const limit = parseInt(request.query.limit);
		Doodle.paginate({}, {page: page, limit: limit}, (err, result) => {
			if(err) {
				response.writeHead(500, {
					"Content-Type":"plain/text"
				});
				response.end("Internal server error");
				
			}
			else {
				if(result) {
					var test = result.docs;
					test.forEach(doc => {
						doc = doc.toObject();
						doc.image_url = "http://localhost:3000/doodles/" + doc.author + "/" + doc.name + "/image"
					});
					response.status(200).json(result);
				}
				else {
					response.writeHead(404, {
						"Content-Type": "plain/text"
					});
					response.end("No doodles found");
				}
			}
		});
	}
};

module.exports = Provider;

