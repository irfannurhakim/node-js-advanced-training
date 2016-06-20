var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res){

	console.log(`${req.method} request for ${req.url}`);

	if(req.url === "/"){

		fs.readFile("./http/index.html", 'UTF-8', function(err, html){
			res.writeHead(200, { "Content-Type" : "text/html" });
			res.end(html);
		});

	} else if (req.url.match(/.png$/)){

		var imgPath = path.join(__dirname, 'http', req.url);
		var imgStream = fs.createReadStream(imgPath);

		res.writeHead(200, { "Content-Type" : "image/png" });
		imgStream.pipe(res);

	} else if(req.url.match(/.css$/)){

		var cssPath = path.join(__dirname, 'http', req.url);
		var cssStream = fs.createReadStream(cssPath, 'UTF-8');

		res.writeHead(200, { "Content-Type" : "text/css" });
		cssStream.pipe(res);

	} else {

		res.writeHead(404, { "Content-Type" : "text/html" });
		res.end("404 File not found");

	}

});

server.listen(3000);
console.log('Server started at port 3000');