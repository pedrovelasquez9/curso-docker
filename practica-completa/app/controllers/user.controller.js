const User = require('../models/user.model.js');

exports.create = (req, res) => {
	console.log(req.body);

	const user = new User({
		nombre: req.body.nombre || "Pepito",
		apellido: req.body.apellido || "Grillo"
	});

	user.save()
		.then(data => {
			res.send(data);
		}).catch(err => {
			res.status(500).send({
				message: err.message || "Error al crear el usuario."
			});
		});
};

exports.findAll = (req, res) => {
	User.find()
		.then(users => {
			res.send(users);
		}).catch(err => {
			res.status(500).send({
				message: err.message || "Error al listar usuarios."
			});
		});
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};