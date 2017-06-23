var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExplosiveSchema  = new Schema({
    name: String,
    type: String,
    material: String,
    radius: String
});

module.exports = mongoose.model('Explosive', ExplosiveSchema);