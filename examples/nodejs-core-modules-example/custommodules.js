var Person = require('./Person');

var ben = new Person('Ben');
var george = new Person('George');

ben.on('speak', function(said){
	console.log(`${this.name} : ${said}`);
});

george.on('speak', function(said){
		console.log(`${this.name} -> ${said}`);
});

ben.emit('speak', 'You may delay, but time will not');
george.emit('speak', 'It is far better to be alone, than to be in bad company');