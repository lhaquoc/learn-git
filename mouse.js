function Mouse(name) {
    this.name = name;
}

Mouse.prototype.die = function() {
	this.dead = true;
};

Mouse.prototype.sleep = function() {
	console.log('Sleeping...');
};

module.exports = Mouse;