function Horse(name) {
}

Horse.prototype.jump = function() {
	// body...
	console.log('Jumping...');
};
Horse.prototype.run = function() {
	// body...
	console.log('Running...');
};

module.exports = Horse;