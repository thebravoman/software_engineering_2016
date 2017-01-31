const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GridImage = require('gridfs-stream');

mongoose.connect('mongodb://localhost/characters');

var characterSchema = new Schema ({	
	firstname : {type: String, index: {unique: true}},
	lastname : String,
	strength : Number,
	imageUrl : String,
	type : String	
});

var Character = mongoose.model('Character', characterSchema);
var Grid = GridImage(mongoose.connection.db, mongoose.mongo);

module.exports = {Character : Character, Grid : Grid};


