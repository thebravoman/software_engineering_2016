var express = require('express');
var router = express.Router();
var securityCheck = require('./../modules/securityCheck.js');

router.get('/', (req, res) => {
    var db = req.db;
    var getAllMovies = "SELECT * FROM Movies";
    db.query(getAllMovies, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else if (results.length == 0) {
            console.log(results);
            res.status(204).send('No movies found');
        } else {
            res.render('movies', {movies:results, user:req.user});
        }
    })
});

router.get('/search', (req, res) => {
    var db = req.db;
    var findMovie = "SELECT * FROM Movies WHERE Title = ?";
    db.query(
        findMovie,
        [req.query.movie],
        (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.render('searchResults', {movies:results, user:req.user, pageTitle:'Search Results'});
            }
        }
    );
});

router.get('/hottest', (req, res) => {
    var db = req.db;
    var getHottestMovies = `SELECT Movies.Id, Movies.Title, Movies.Image, Movies.Description,
    COUNT(Movies.Title) AS Views FROM Movies
    INNER JOIN Projections ON Movies.Id = Projections.MovieId
    INNER JOIN ProjectionViewers ON Projections.Id = ProjectionViewers.ProjectionId
    GROUP BY Movies.Id, Movies.Title, Movies.Description ORDER BY Views DESC LIMIT 10;`;
    db.query(getHottestMovies, (err, results) => {
    if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    } else {
        res.render('searchResults', {movies:results, user:req.user, pageTitle:'Hottest Movies'});
    }
    })
});

router.get('/add', securityCheck.isAdmin, (req, res) => {
    res.render('addMovie', {user:req.user});
});

router.post('/add', securityCheck.isAdmin, (req, res) => {
    var db = req.db;
    var insertMovie = `INSERT INTO Movies
        (Title, Image, AgeRestriction, Premiere, Description, Length)
    VALUES
            (?, ?, ?, ?, ?, ?);`;
    var image = (req.files.length) ?
        `/uploads/${req.files[0].filename}` : '/images/519539-085_Movie-512.png';
    db.query(
        insertMovie, 
        [
            req.body.title, 
            image,
            req.body.ageRes, 
            req.body.premiere, 
            req.body.description,
            req.body.length
        ],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(201).redirect(`/movies/${result.insertId}`);
            }
        }
    );
});

router.get('/:movieId', (req, res) => {
    var db = req.db;
    var getProjections = `SELECT m.Length, 
        p.Id, p.HallId, p.StartTime
        FROM Projections AS p
        LEFT JOIN Movies AS m
        ON m.Id = p.MovieId
        WHERE p.StartTime > NOW() AND m.Id = ?;`;
    db.query(
        getProjections, 
        [req.params.movieId],
        (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            var projections = results;
            var getMovie = `SELECT m.Id AS MovieId, m.Title, 
                m.Image, m.Premiere, m.Description,
                m.Length, m.AgeRestriction FROM Movies AS m
                WHERE m.Id = ?;`;
            db.query(
                getMovie, 
                [req.params.movieId],
                (err, results) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                } else if (results.length == 0) {
                    res.status(204).send('No movie found');
                } else {
                    movie = results[0];
                    res.render('movie', { movie: movie, projections: projections, user:req.user });
                }
            });
        }
    });
});

router.get('/:movieId/edit', securityCheck.isAdmin, (req, res) => {
    var db = req.db;
    var getMovie = "SELECT * FROM Movies WHERE Id = ?;";
    db.query(getMovie, [req.params.movieId], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else if (results.length == 0) {
            res.status(204).send('No movie found');
        } else {
            res.render('editMovie', {movie:results[0], user:req.user});
        }
    });
});

router.post('/:movieId/edit', securityCheck.isAdmin, (req, res) => {
    var db = req.db;
    db.query("SELECT * FROM Movies WHERE Id = ?;",
        [req.params.movieId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else if (result.length == 0) {
                res.status(204).send('No Movie Found');
            } else {
                var title = (req.body.title.length) ?
                    req.body.title : result[0].Title;
                var image = (req.files.length) ?
                    `/uploads/${req.files[0].filename}` : result[0].Image;
                var ageRes = (req.body.ageRes) ?
                    req.body.ageRes : result[0].AgeRestriction;
                var premiere = (req.body.premiere.length) ?
                    req.body.premiere : result[0].Premiere;
                var description = (req.body.description.length) ?
                    req.body.description : result[0].Description;
                var length = (req.body.length) ?
                    req.body.length : result[0].Length;

                var updateMovies = `UPDATE Movies SET
                    Title = ?, Image = ?, AgeRestriction = ?, Premiere = ?,
                    Description = ?, Length = ? WHERE Id = ?;`;
                db.query(
                    updateMovies,
                    [
                        title,
                        image,
                        ageRes,
                        premiere,
                        description,
                        length,
                        req.params.movieId
                    ],
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            rest.status(500).send('Internal Server Error');
                        } else {
                            console.log(result);
                            res.status(201).redirect(`/movies/${req.params.movieId}`);
                        }
                    }
                );
            }
        }
    );
});

router.get('/:movieId/remove', securityCheck.isAdmin, (req, res) => {
    var db = req.db;
    var getMovie = "SELECT * FROM Movies WHERE Id = ?;"
    db.query(
        getMovie,
        [req.params.movieId], 
        (err, rows) => {
        if (err) {
            console.log(err);
			res.status(500).send('Internal Server Error');
        } else if (rows.length == 0) {
            res.status(204).send('No projection found');
        } else {
            var removeMovie = "DELETE FROM Movies WHERE Id = ?;";
            db.query(
                removeMovie,
                [req.params.movieId],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Internal Server Error');
                    } else {
                        res.redirect('/');
                    }
                }
            );
        }
    });
});

router.get('/:movieId/addProjection', securityCheck.isAdmin, (req, res) => {
    var db = req.db;
    var getMovie = "SELECT * FROM Movies WHERE Id = ?;";
    db.query(
        getMovie,
        [
            req.params.movieId
        ],
        (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else if (results.length == 0) {
                res.status(204).send('No movie found');
            } else {
                res.render('addProjection', { movie: results[0], user:req.user});
            }
        }
    );
});

router.post('/:movieId/addProjection', securityCheck.isAdmin, (req, res) => {
    var db = req.db;
    var insertProjection = `INSERT INTO Projections
        (MovieId, HallId, StartTime)
    VALUES
        (?, ?, ?);`;
    db.query(
        insertProjection,
        [
            req.params.movieId,
            req.body.hallId,
            req.body.startTime
        ],
        err => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(201).redirect(`/movies/${req.params.movieId}`);
            }
        }
    );
});

module.exports = router;