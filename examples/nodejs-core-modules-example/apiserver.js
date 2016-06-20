var http = require('http');
var data = require('./data/example');

var server = http.createServer(function(req, res){

	res.writeHead(200, { "Content-Type" : "text/json"});
	res.end(JSON.stringify(data));

});

server.listen(3000);
console.log('Server started at port 3000');