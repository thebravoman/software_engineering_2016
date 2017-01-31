const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Grid = require('gridfs-stream');

mongoose.connect('mongodb://localhost/characters');

const characterSchema = new Schema ({	
	firstname : {
		type: String,
		unique: true
	},
	lastname : String,
	strength : Number,
	imageUrl : String,
	type : String	
});

const Character = mongoose.model('Character', characterSchema);
const gridImage = Grid(mongoose.connection.db, mongoose.mongo);

module.exports = { Character, gridImage };