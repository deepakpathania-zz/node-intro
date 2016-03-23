var fs = require("fs");
console.log("Starting reading .. \n");
var content = fs.readFileSync("config/config.json");
console.log("Content : " +content);
console.log("Carry on ..");
var config = JSON.parse(content);
console.log("First name : " +config.firstname);