var http = require('http');

var server = http.createServer(function(req, res){

	//res.writeHead(200, { "Content-Type" : "text/plain" });
	//res.end('Hello World');

	res.writeHead(200, { "Content-Type" : "text/html" });
	res.end(`
		<html>
		<head><title>Nodejs Server</title></head>
		<body>
			<h1>Serving html text</h1>
			<p>${req.url}</p>
			<p>${req.method}</p>
		</body>
		</html>
	`);

});

server.listen(3000);
console.log('Server started at port 3000');