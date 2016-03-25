var fs = require("fs"); 
var config= JSON.parse(fs.readFileSync("config/config.json"));
console.log("Starting..");
var host = config.host;
var port=config.port;
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/html"));

app.get("/", function(request, response){
 	response.send("Hello express!!");
});

app.get("/hello/:text", function(request,response){
	response.send("Hello " +request.params.text);
});

var users = {
	"1" : {
	"firstname" : "Deepak",
	"lastname"  : "Pathania"
		},
	"2" : {
	"firstname" : "Random",
	"lastname" : "Text"
	}
};

app.get("/users/:id", function(request,response) {
	var user = users[request.params.id];
	if(user) {
		response.send("<b>First name : </b>" + user.firstname + "<br/><b> Lastname : </b>" +user.lastname);

	}
	else {
		response.send("Not found" , 404);
	}
});

app.listen(port,host);
console.log("Listening at " +host+ ":" +port);
