var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GridImage = require('gridfs-stream');
var mongoosePaginate = require('mongoose-paginate');

mongoose.connect('mongodb://localhost/pets');

var petSchema = new Schema({
    name: {type: String, index: {unique: true}},
    typeAnimal: String,
    breed: String,
    imageUrl: String,
    description: String,
    age: Number,
    owner: String
});

petSchema.plugin(mongoosePaginate);


var Pet = mongoose.model('Pet', petSchema);
var GridImage = GridImage(mongoose.connection.db, mongoose.mongo);


module.exports = {Pet : Pet,
  Grid : GridImage,
  ObjectId : mongoose.ObjectId}
