var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Ben');
var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');

cat.eat(mouse);
dog.sayHello();
dog.eat(cat);
try {
	cat.eat(dog);
} catch(error) {
	console.log('Error while cat eating a dog');
}
console.log(cat);
console.log(dog);