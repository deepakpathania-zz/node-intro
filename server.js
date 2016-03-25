var http = require("http");
var fs = require("fs"); 
console.log("Starting ..");
var config= JSON.parse(fs.readFileSync("config/config.json"));
var host = config.host;
var port=config.port;
var server= http.createServer(function(request, response) {
	console.log("Recieved request : " +request.url);
	fs.readFile("html" + request.url , function(error, data) {
		if(error) {
			response.writeHead(404, {"Content-type" : "text/plain"});
			response.write("Not found.");
			response.end();
		}
		else {
			response.writeHead(200, {"Content-type" : "text/html"});
			response.write(data);
			response.end();
		}
	})
	
});

server.listen(port, host, function() {
	console.log("Listening " +host+":" + port);
});

fs.watchFile("config/config.json" , function() {
	config=JSON.parse(fs.readFileSync("config/config.json"));
	host=config.host;
	port=config.port;
	server.close();
	server.listen(port, host, function() {
		console.log("Now listening at : " +host+ ":" +port);
	});
});
