var http = require('http');
var fs = require('fs');

var options = {
	hostname : 'www.detik.com',
	port: 80,
	method: 'GET'
}

var req = http.request(options, function(res){

	var responseBody = "";

	console.log('Response from server started.');
	console.log(`Server status ${res.statusCode}`);
	console.log(`Response headers ${res.headers}`);

	res.setEncoding('UTF-8');

	res.once('data', function(chunk){
		console.log(chunk);
	});

	res.on('data', function(chunk){
		console.log(`--chunk-- ${chunk.length} `);
		responseBody += chunk;
	});

	res.on('end', function(){
		fs.writeFile("detik.html", responseBody, function(err){
			if(err){
				throw err;
			}

			console.log("file downloaded")
		});
	});

});


req.on('error', function(err){
	console.log(`error in request ${err}`);
});

req.end();