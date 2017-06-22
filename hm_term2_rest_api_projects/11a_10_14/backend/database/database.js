const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');

mongoose.connect('mongodb://localhost/doodles');


const doodleSchema = new Schema ({
	name : String,
	description : String,
	category : String,
	tags : [String],
	author: String,
	votes: Number
},
{
	timestamps:true
});

doodleSchema.plugin(paginate);


const Doodle = mongoose.model('Doodle', doodleSchema);

module.exports= {
	Doodle: Doodle
};
