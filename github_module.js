var github = require("./github.js");

github.getRepos("deepakpathania", function(repos) {
	console.log("deepakpathania's repos : " ,repos);
});