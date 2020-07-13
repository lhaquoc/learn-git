var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Ben');
var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
dog.sayHello();
dog.eat(cat);
console.log(dog);