var greet = require(__dirname + '/lib/greet');
var greetPerson = greet(process.argv[2]);
console.log(greetPerson);
