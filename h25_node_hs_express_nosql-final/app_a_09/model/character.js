const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GridImage = require('gridfs-stream');

mongoose.connect('mongodb://localhost/characters');

const characterSchema = new Schema ({	
	firstname : {type: String, 
				index: {unique: true}},
	lastname : String,
	strength : Number,
	imageUrl : String,
	type : String	
});

const Character = mongoose.model('Character', characterSchema);
let Grid = GridImage(mongoose.connection.db, mongoose.mongo);

module.exports = {
	Character : Character,
	Grid : Grid
};