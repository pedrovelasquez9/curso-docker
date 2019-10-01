const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

app.use(bodyParser.json())

mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
	console.log("Conectado a la bd");
}).catch(err => {
	console.log('Error al conectarse a la bd: ', err);
	process.exit();
});

app.get('/', (req, res) => {
	res.json({ "message": "Una api rest con nodejs para docker." });
});

require('./app/routes/user.router.js')(app);

app.listen(3000, () => {
	console.log("Escuchando en el puerto 3000");
});