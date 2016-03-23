var fs = require("fs");
console.log("Starting .. ");
var content = fs.readFileSync("config/config.json");
var config = JSON.parse(content);
console.log("Configuration : ", config);

console.log("\n Waiting and watching \n");

fs.watchFile("config/config.json", function(current, previous) {
console.log("Config changed");
var content = fs.readFileSync("config/config.json");
var config = JSON.parse(content);
console.log("New config : ", config);
});