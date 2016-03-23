var fs = require("fs");
console.log("Starting ..");
fs.writeFile("txt/write_async.txt", "Hello world asynchronously!", function(error) {
	console.log("File writing complete..");
});
console.log("Carry on executing");