var fs = require('fs');

fs.readFile('../test.sql', 'utf8', function(err, data){
	console.log(`File read ${data.length}`);
});

console.log('Reading file');