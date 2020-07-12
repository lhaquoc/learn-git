var chalk = require('chalk');
function Dog(name) {
	this.stomach = [];
	this.name = name;
}

Dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
};

Dog.prototype.sayHello = function() {
	// body...
	console.log("Hello! I am a dog, and my name is " + chalk.red(this.name));
};

module.exports = Dog;