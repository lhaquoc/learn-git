var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Ben');
var cat = new Cat('Tom');
dog.sayHello();
dog.eat(cat);
console.log(dog);