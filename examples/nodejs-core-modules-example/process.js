function grab(flag){
	var idx = process.argv.indexOf(flag);
	return (idx === -1) ? null : process.argv[idx+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || ! greeting){
	console.log('you blew it!');
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}