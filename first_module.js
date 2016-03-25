function privateHello() {
	return "Hello";
}
function publicHello() {
	return privateHello();
}

module.exports.hello=publicHello;