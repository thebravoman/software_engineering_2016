var express = require('express');
var passport = require('passport');
var securityCheck = require('./../modules/securityCheck.js');
var router = express.Router();

router.get('/', (req, res) => {
	var db = req.db; 
	db.query("SELECT * FROM Movies ORDER BY Premiere DESC LIMIT 10;", (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send('Internal Server Error');
		} else {
			res.render('index', {movies:results, user:req.user});
		}
	});
});

router.get('/login', (req, res) => {
	res.render('login', { message: req.flash('loginMessage'), user:req.user });
});

router.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile',
		failureRedirect : '/login',
		failureFlash : true
	}),
	(req, res) => {
		console.log("hello");

		if (req.body.remember) {
			req.session.cookie.maxAge = 1000 * 60 * 3;
		} else {
			req.session.cookie.expires = false;
		}
	res.redirect('/');
});

router.get('/signup', (req, res) => {
	res.render('signup', { message: req.flash('signupMessage'), user:req.user });
});

router.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/profile',
	failureRedirect : '/signup',
	failureFlash : true
}));

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/users', securityCheck.isAdmin, (req, res) => {
	var db = req.db; 
	db.query("SELECT * FROM Users;", (err, results) => {
	if (err) {
		console.log(err);
		res.status(500).send('Internal Server Error');
	} else{
		res.render('users', { title: "List of All Users",
								users:results, user:req.user});
	}
	})
});

router.get('/boughtTickets', securityCheck.isLoggedIn, (req, res) => {
	var db = req.db;
	var getBoughtTickets = `SELECT Projections.Id, Projections.MovieId, 
		Movies.Title, Movies.Length, Projections.StartTime, Projections.HallId
		FROM ProjectionViewers LEFT JOIN Projections
		ON ProjectionViewers.ProjectionId = Projections.Id
		LEFT JOIN Movies ON Projections.MovieId = Movies.Id
		WHERE ProjectionViewers.Username = ? AND Projections.StartTime >= NOW()
		ORDER BY Projections.StartTime`;
	db.query(
		getBoughtTickets, 
		[req.user.Username], 
		(err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send('Internal Server Error');
			} else {
				res.render('boughtTickets', {projections: results, user:req.user});
			}
	})
});

module.exports = router;