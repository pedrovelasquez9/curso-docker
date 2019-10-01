const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	nombre: String,
	apellido: String
}, {
	timestamps: true
});

module.exports = mongoose.model('User', UserSchema);