var express = require('express');
var router = express.Router();
var securityCheck = require('./../modules/securityCheck.js');
var age = require('./../modules/age.js');
var bcrypt = require('bcrypt-nodejs');

router.get('/', securityCheck.isLoggedIn, (req, res) => {
    var userAge = age.calculate(req.user.DateOfBirth);
    res.render('profile', {
        user : req.user,
        userAge: userAge
    });
});

router.get('/settings', securityCheck.isLoggedIn, (req, res) => {
    res.render('profileSettings', {user:req.user});
});

router.post('/settings', securityCheck.isLoggedIn, (req, res) => {
    var db = req.db;
    db.query(
        "SELECT * FROM Users WHERE Username = ?;", 
        [req.user.Username],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else if (result.length == 0) {
                res.status(204).send('No user found');
            } else {
                var password = (req.body.password.length) ?
                    bcrypt.hashSync(req.body.password, null, null) : result[0].Password;  
                var firstName = (req.body.firstName.length) ?
                    req.body.firstName : result[0].FirstName;
                var lastName = (req.body.lastName.length) ?
                    req.body.lastName : result[0].LastName;
                var dateOfBirth = (req.body.dateOfBirth) ?
                    req.body.dateOfBirth : result[0].DateOfBirth;
                
                // store profilePics in /public/uploads, very ugly, but for now it works
                var profilePic = (req.files.length) ?
                    `/uploads/${req.files[0].filename}` : result[0].ProfilePic;

                var updateUser = `UPDATE Users SET
                    Password = ?, FirstName = ?, LastName = ?,
                    DateOfBirth = ?, ProfilePic = ?
                    WHERE Username = ?;`;
                db.query(
                    updateUser,
                    [
                        password, 
                        firstName,
                        lastName,
                        dateOfBirth,
                        profilePic,
                        req.user.Username
                    ],
                    err => {
                        if (err) {
                            console.log(err);
                            res.status(500).send('Internal Server Error');
                        } else {
                            res.status(201).redirect('/profile');
                        }
                    }
                );
            }
        }
    );
});

router.get('/delete', securityCheck.isLoggedIn, (req, res) => {
    var db = req.db;
    var username = req.user.Username;
    req.logout();
    var deleteUser = `DELETE FROM Users
        WHERE Username = ?;`;
    db.query(
        deleteUser,
        [username],
        err => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            }
            res.status(200).redirect('/');
        }
    );
});

module.exports = router;