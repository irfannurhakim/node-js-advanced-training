var path = require("path");

global.console.log("Hello World");

console.log(__dirname);

console.log(__filename);

console.log(`Hello from file ${path.basename(__filename)}`);