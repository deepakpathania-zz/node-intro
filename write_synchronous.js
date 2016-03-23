var fs = require("fs");
console.log("Starting writing ..");
fs.writeFileSync("txt/write_sync.txt" , "Hello World synchronously");
console.log("Finished");