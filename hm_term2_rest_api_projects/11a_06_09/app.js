'use strict';

// MongoDB config
const mongojs = require('mongojs');
const connectionStringff = 'mongodb://Admin:secretPassword@ds151048.mlab.com:51048/teen_database';
const collections = ['users', 'jobs'];

const db = mongojs(connectionString, collections);

var ObjectId = require('mongodb').ObjectId; 
// EXPRESS config
const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

const app = express();

app.use('/', express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require('jsonwebtoken');

const apiRouter = new express.Router();

apiRouter
	.get('/users', function (req, res, next) {
		db['users'].find(function (err, users) {
			if (err) {
				return res.json({ "error": "DB Error"});
			}
			return res.status(200).json(users);
		})
	})
	.post('/users', function (req, res, next) {
		let user = req.body;

		if (!user.username || !user.password) {
			return res.status(400).json({ "error": "Please Enter username or password" });
		}
		else {
			db['users'].findOne({ username: req.body.username }, function(err, userInDb) {
				if (userInDb) {
					return res.status(401).json({"error": "Please choose another username. This username is already in use!"});
				}
			
				db['users'].save(user, function (err, user) {
					if (err) {
						return res.status(400).json({"error": "DB error"});
					}
					return res.status(200).json(user);
				})
			})
		}
	})
	.post('/users/update', function(req, res, next) {
		let user = req.body;
		db['users'].update({ username: user.userToChange }, user, { upsert: true }, function(err, user) {
			if (!user) {
				return res.status(401).json({"error": "DB: User not found"});
			}

			return res.status(200).json(user);
		});
	})
	.get('/users/:username', function(req, res, next) {
		let username = req.params.username;
		username = JSON.parse(username).username;

		db['users'].findOne({ username: username }, function(err, user) {
			if (!user) {
				return res.status(401).json({"error": "DB: User not found"});
			}
			return res.status(200).json(user);
		});
	})
	.post('/authenticate', function(req, res, next)  {
		if (!req.body.username || !req.body.password) {
			return res.status(400).json({ "error": "You must send the username and the password" });
		}
		db['users'].findOne({ username: req.body.username }, function(err, user) {
			if (!user) {
				return res.status(401).json({ "error": "The username or password doesn't match" });
			}	
			if (!(user.password === req.body.password)) {
				return res.status(401).json({ "error": "The username or password doesn't match" });
			}
			
			res.status(200).send({
				group: user.groupName,
				role: user.role
			});
		});
	})
	.get('/jobs/single-job/:id', function(req, res, next) {
		let id = req.params.id;

		db['jobs'].findOne({ _id: new ObjectId(id) }, function(err, job) {
			if (err) {
				return res.status(400).json({ "error": "Error in DB" });
			}

			return res.status(200).json(job);
		});
	})
	.post('/jobs/update/:id', function(req, res, next) {
		let id = req.params.id;

		console.log(req.body);
		db['jobs'].update({ _id: new ObjectId(id) }, req.body, { upsert: true }, function(err, editedJob) {
			if (err) {
				return res.status(400).json({ "error": "Error in DB" });
			}

			return res.status(200).json(editedJob);
		});
	})
	.post('/jobs/delete/:id', function(req, res, next) {
		let id = req.params.id;

		db['jobs'].remove({ _id: new ObjectId(id) }, function(err, deletedJob) {
			if (err) {
				return res.status(400).josn({ "error": "Error in DB" });
			}

			return res.status(200).json(deletedJob);
		})
	})
	.get('/jobs/:page', function(req, res, next) {
		let page = +req.params.page;

		db['jobs'].find({}, function(err, jobs) {
			if (err) {
				return res.status(400).josn({ "error": "Error in DB" });
			}

			let result = {};
			result.totalPages = Math.floor(jobs.length / 9) + 1;

			jobs = jobs.slice(page * 8 - 8, page * 8);
			result.jobs = jobs;

			return res.status(200).json(result);
		});
	})
	.post('/jobs', function(req, res, next) {
		let job = req.body;

		db['jobs'].save(job, function(err, user) {
			if (err) {
				return res.status(400).json({ "error": "Error in DB" });
			}

			return res.status(200).json(user);
		});
	})

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server running on port:${port}`);