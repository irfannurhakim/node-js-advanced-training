var fs = require('fs')

var stream = fs.createReadStream('../test.sql', 'utf8');

var data = "";

stream.once('data', function(){

	console.log('\n\n\n');
	console.log('Started reading file');
	console.log('\n\n\n');

});

stream.on('data', function(chunk){
	
	process.stdout.write(` chunk: ${chunk.length} |`);
	data += chunk;

});

stream.on('end', function(){

	console.log('\n\n\n');
	console.log(`Finished reading file ${data.length}`);
	console.log('\n\n\n');

});