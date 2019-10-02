var http = require("http");

var handleRequest = function (req, res) {
	console.log('Prueba desde node');
	res.writeHead(200);
	res.end("Hola desde docker compose");
}

var www = http.createServer(handleRequest);

www.listen(8888);