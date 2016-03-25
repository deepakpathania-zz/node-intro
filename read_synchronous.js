var fs = require("fs");
console.log("Starting ..");
var contents=fs.readFileSync("txt/sample.txt");
console.log("Contents : " +contents);
console.log("Carry on executing ..");