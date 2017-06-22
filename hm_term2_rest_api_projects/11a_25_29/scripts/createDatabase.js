var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('../config/database');

var connection = mysql.createConnection({
  host : dbconfig.connection.host,
  user: dbconfig.connection.user,
  password: dbconfig.connection.password
});

connection.query(`DROP DATABASE IF EXISTS ${dbconfig.database};`, err => {
    if (err) throw err;
    console.log("No database");
});

connection.query(`CREATE DATABASE ${dbconfig.database} CHARACTER SET utf8;`, err => {
    if (err) throw err;
    console.log("Database created");
});

connection.query(`USE ${dbconfig.database};`, err => {
    if (err) throw err;
    console.log(`Using ${dbconfig.database}`);
});

var createTableUsers = `CREATE TABLE Users (
Username VARCHAR(15) NOT NULL PRIMARY KEY,
Password VARCHAR(60) NOT NULL,
FirstName VARCHAR(30) NOT NULL,
LastName VARCHAR(30) NOT NULL,
DateOfBirth DATE NOT NULL,
ProfilePic VARCHAR(255) NOT NULL,
Role VARCHAR(20) NOT NULL
);`;
connection.query(createTableUsers, err => {
    if (err) throw err;
    console.log("Created Users table");
});

var createTableMovies = `CREATE TABLE Movies (
Id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
Title VARCHAR(100) NOT NULL,
Image VARCHAR(255) NOT NULL,
AgeRestriction INTEGER NOT NULL,
Premiere DATE NOT NULL,
Description VARCHAR(1000) NOT NULL,
Length INTEGER NOT NULL
);`;
connection.query(createTableMovies, err => {
    if (err) throw err;
    console.log("Created Movies table");
});

var createTableHalls = `CREATE TABLE Halls (
Id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
Seats INTEGER NOT NULL
);`;
connection.query(createTableHalls, err => {
    if (err) throw err;
    console.log("Created Halls table");
});

var createTableProjections = `CREATE TABLE Projections (
Id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
MovieId INTEGER NOT NULL,
HallId INTEGER NOT NULL,
StartTime DATETIME NOT NULL,
FOREIGN KEY(MovieId) REFERENCES Movies(Id) ON DELETE CASCADE,
FOREIGN KEY(HallId) REFERENCES Halls(Id)
);`;
connection.query(createTableProjections, err => {
    if (err) throw err;
    console.log("Created Projections table");
});

var createTableProjectionViewers = `CREATE TABLE ProjectionViewers (
Id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
ProjectionId INTEGER NOT NULL,
Username VARCHAR(15) NOT NULL,
FOREIGN KEY(ProjectionId) REFERENCES Projections(Id) ON DELETE CASCADE,
FOREIGN KEY(Username) REFERENCES Users(Username) ON DELETE CASCADE
);`;
connection.query(createTableProjectionViewers, err => {
    if (err) throw err;
    console.log("Created ProjectionViewers table");
});

var testpass = bcrypt.hashSync('test', null, null);
var test2pass = bcrypt.hashSync('test2', null, null);
var hspasovpass = bcrypt.hashSync('1234567890', null , null);
var radito3pass = bcrypt.hashSync('0987654321', null, null);
var santapass = bcrypt.hashSync('northpole', null, null);
var dontpass = bcrypt.hashSync('123456', null, null);
var adminPass = bcrypt.hashSync('adminPass', null, null);
var insertUsers = `INSERT INTO Users 
    (Username, Password, FirstName, LastName, DateOfBirth, ProfilePic, Role)
VALUES
    ( 'test', '${testpass}', 'Testing', 'Tester', '2000-11-11', '/images/facebook-default--profile-pic.jpg', 'user' ),
    ( 'test2', '${test2pass}', 'Another', 'Tester', '2000-10-20', '/images/No_picture_icon_2.jpg', 'user' ),
    ( 'hspasov', '${hspasovpass}', 'Hristo', 'Spasov', '1999-12-09', '/images/No_picture_icon_2.jpg', 'user' ),
    ( 'radito3', '${radito3pass}', 'Rangel', 'Ivanov', '1999-12-27', '/images/No_picture_icon_2.jpg', 'user' ),
    ( 'santa', '${santapass}', 'Santa', 'Claus', '1817-01-01', '/images/No_picture_icon_2.jpg', 'user' ),
    ( 'dont', '${dontpass}', 'Donald', 'Trump', '1954-03-08', '/images/No_picture_icon_2.jpg', 'user' ),
    ( 'admin', '${adminPass}', 'Admin', 'Admin', '1985-04-15', '/images/admin.jpg', 'admin');`;
connection.query(insertUsers, err => {
    if (err) throw err;
    console.log("Inserted users");
});

var insertMovies = `INSERT INTO Movies
    (Title, Image, AgeRestriction, Premiere, Description, Length)
VALUES
    ( 'Pirates of the Carribean', '/images/Pirates-Of-The-Caribbean-Wallpapers-On-Stranger-Tides-1920x1200-4.jpg', 13, '2011-05-20', 'Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.', 136 ),
    ( 'Sample Movie Name', '/images/519539-085_Movie-512.png', 0, '2017-06-01', 'Sample Description', 100 ),
    ( 'Finding Dory', '/images/finding-dory-wallpaper-movie-poster-nemo.jpg', 0, '2016-06-17', 'The friendly but forgetful blue tang fish, Dory, begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.', 97 ),
    ( 'Changeling', '/images/Changeling.jpg', 12, '2008-10-31', 'A grief-stricken mother takes on the LAPD to her own detriment when it stubbornly tries to pass off an obvious impostor as her missing child, while also refusing to give up hope that she will find him one day.', 141 ),
    ( 'Black Swan', '/images/natalie-portman-in-black-swan_083878.jpg', 16, '2010-12-17', 'A committed dancer wins the lead role in a production of Tchaikovskys "Swan Lake" only to find herself struggling to maintain her sanity.', 108 ),
    ( 'Star Wars', '/images/Star-Wars-2.jpg', 13, '2015-12-18', 'Three decades after the Empires defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and spare parts scavenger Rey are caught up in the Resistances search for the missing Luke Skywalker.', 136 ),
    ( 'The Dictator', '/images/The-Dictator.jpg', 16, '2012-05-16', 'The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.', 83 );`;
connection.query(insertMovies, err => {
    if (err) throw err;
    console.log("Inserted movies");
});

var insertHalls = `INSERT INTO Halls
    (Id, Seats)
VALUES
    (1, 50),
    (2, 84),
    (3, 50),
    (4, 148),
    (5, 74);`;
connection.query(insertHalls, err => {
    if (err) throw err;
    console.log("Inserted halls");
});

var insertProjections = `INSERT INTO Projections
    (MovieId, HallId, StartTime)
VALUES
    (1, 3, '2017-04-04 08:30:00'),
    (1, 3, '2017-04-04 15:30:00'),
    (1, 3, '2017-04-06 08:30:00'),
    (1, 3, '2017-04-06 15:30:00'),
    (1, 3, '2017-04-24 17:30:00'),
    (1, 3, '2017-05-16 08:30:00'),
    (1, 3, '2017-05-16 14:30:00'),
    (1, 3, '2017-05-20 09:30:00'),
    (1, 3, '2017-05-20 19:20:00'),
    (2, 2, '2017-06-01 09:45:00'),
    (2, 2, '2017-06-02 09:45:00'),
    (2, 3, '2017-06-03 12:40:00'),
    (2, 3, '2017-06-10 12:40:00'),
    (2, 3, '2017-06-17 12:40:00'),
    (2, 3, '2017-06-30 12:40:00'),
    (2, 3, '2017-07-15 12:40:00'),
    (2, 3, '2017-07-30 21:00:00'),
    (3, 4, '2016-07-21 08:00:00'),
    (3, 2, '2016-07-21 08:00:00'),
    (3, 4, '2016-07-21 12:00:00'),
    (3, 2, '2016-07-21 12:00:00'),
    (3, 4, '2016-07-21 16:00:00'),
    (3, 2, '2016-07-21 16:00:00'),
    (3, 4, '2016-07-22 17:00:00'),
    (3, 4, '2016-07-23 12:00:00'),
    (3, 4, '2016-07-25 12:00:00'),
    (3, 4, '2016-08-01 16:00:00'),
    (3, 4, '2016-08-10 16:00:00'),
    (3, 1, '2016-08-15 13:00:00'),
    (3, 1, '2016-09-20 21:00:00'),
    (4, 3, '2017-01-03 07:00:00'),
    (4, 3, '2017-01-10 17:00:00'),
    (4, 3, '2017-01-17 17:00:00'),
    (4, 3, '2017-01-31 17:00:00'),
    (4, 3, '2017-02-14 22:15:00'),
    (4, 3, '2017-02-28 22:15:00'),
    (4, 3, '2017-03-13 22:15:00'),
    (4, 3, '2017-04-30 22:15:00'),
    (6, 5, '2017-11-30 08:50:00'),
    (6, 5, '2017-11-30 11:50:00'),
    (6, 5, '2017-12-10 11:50:00'),
    (6, 5, '2017-12-20 11:50:00'),
    (6, 5, '2017-01-01 03:00:00'),
    (6, 5, '2017-01-07 11:50:00'),
    (6, 5, '2017-02-10 19:00:00'),
    (6, 5, '2018-02-18 19:25:00'),
    (7, 2, '2015-09-04 12:30:00'),
    (7, 2, '2015-10-04 17:30:00'),
    (7, 2, '2015-11-04 17:30:00'),
    (7, 2, '2015-12-28 21:45:00');`;
connection.query(insertProjections, err => {
    if (err) throw err;
    console.log("Inserted Projections");
});

var insertProjectionViewers = `INSERT INTO ProjectionViewers
    (ProjectionId, Username)
VALUES
    (46, 'test'),
    (47, 'test'),
    (48, 'test2'),
    (48, 'test'),
    (49, 'hspasov'),
    (49, 'radito3'),
    (49, 'santa'),
    (1, 'dont'),
    (2, 'hspasov'),
    (3, 'radito3'),
    (3, 'santa'),
    (5, 'test'),
    (5, 'test2'),
    (5, 'hspasov'),
    (5, 'radito3'),
    (5, 'dont'),
    (5, 'santa'),
    (10, 'test'),
    (10, 'test2'),
    (15, 'dont'),
    (15, 'santa'),
    (15, 'test'),
    (31, 'hspasov'),
    (33, 'hspasov'),
    (38, 'hspasov'),
    (18, 'hspasov'),
    (24, 'hspasov'),
    (18, 'radito3'),
    (45, 'radito3'),
    (40, 'radito3'),
    (26, 'radito3'),
    (31, 'radito3'),
    (19, 'radito3'),
    (20, 'radito3');`;
connection.query(insertProjectionViewers, err => {
    if (err) throw err;
    console.log("Inserted ProjectionViewers");
});

connection.end();