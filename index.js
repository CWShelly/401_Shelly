var greet = require(__dirname + '/lib/greet');
var greetPerson = greet(process.argv[2]);
var greetPerson2 = greet('shelly');

console.log(greetPerson);
console.log(greetPerson2);
