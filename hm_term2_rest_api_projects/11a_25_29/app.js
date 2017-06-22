var mysql = require('mysql');
var express = require('express');
var session  = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var dbconfig = require('./config/database');
var multer = require('multer');
var upload = multer({ dest: './public/uploads' });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var db = mysql.createConnection({
  host : dbconfig.connection.host,
  user: dbconfig.connection.user,
  password: dbconfig.connection.password,
  database: dbconfig.database
});

// Make our db accessible to our router
app.use((req,res,next) => {
    req.db = db;
    next();
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(upload.any());

app.use(session({
  secret: 'daimophilosophics',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./config/passport')(passport, db);

var index = require('./routes/index');
var movies = require('./routes/movies');
var projections = require('./routes/projections');
var profile = require('./routes/profile');

app.use('/', index);
app.use('/movies', movies);
app.use('/projections', projections);
app.use('/profile', profile);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
