var express = require('express');        // call express
var app = express();                 
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/explosions')

var Explosive = require('./app/models/explosives');

// bodyparser to get the the data from post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

//------------------------------------------------------



// Middleware route
router.use(function(req, res, next) {
    // do logging
    console.log('Processing request...');
    next(); // make sure we go to the next routes and don't stop here
});

// test route at GET http://localhost:8080/explo)
router.get('/', function(req, res) {
    res.json({ message: 'EXPLOOOSIONS OF LIIIFEEE' });   
});


router.route('/explosives')

// add explosive (accessed at POST http://localhost:8080/explo/explosives)
.post(function(req, res) {

    var explosive = new Explosive();        // create instance of the Explosives model
    explosive.name = req.body.name;  		// set the explosive name
    explosive.type = req.body.type;  		// set the explosive type
    explosive.material = req.body.material; // set the explosive material
    explosive.radius = req.body.radius;  	// set the explosive radius
    
    // save and check for errors
    explosive.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Explosive added' });
    });

})

// get explosive info
.get(function(req, res) {
    Explosive.find(function(err, explosives) {
        if (err)
            res.send(err);

        res.json(explosives);
    });
});


router.route('/explosives/:explosive_id')

.get(function(req, res) {
    Explosive.findById(req.params.explosive_id, function(err, explosive) {
        if (err)
            res.send(err);
        res.json(explosive);
    });
})

.put(function(req, res) {


	Explosive.findById(req.params.explosive_id, function(err, explosive) {

		if (err)
            res.send(err);

        explosive.name = req.body.name;
        explosive.type = req.body.type; 
        explosive.material = req.body.material;
        explosive.radius = req.body.radius;

        explosive.save(function(err) {
            if (err)
               res.send(err);

            res.json({ message: 'Explosive updated!' });
        });

    });
})

.delete(function(req, res) {
        Explosive.remove({
            _id: req.params.explosive_id
        }, function(err, Explosive) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
});



// routes prefix: /explo
app.use('/explo', router);

// STARTING THE SERVER
app.listen(port);
console.log('Black powder amount: ' + port);