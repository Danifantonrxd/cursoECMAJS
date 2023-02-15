// arrays destructuring

let fruits = ['Apple', 'Banana', 'Orange'];
let [,,fruit] = fruits;
let [a, b] = fruits;


// a = Apple
// b = Banana
console.log(fruit); /*arroja "Orange"*/

//And objetos

let user = { username: "Daniel", age: 22};

let {nick, age} = user;

// nick = "Daniel"
// age = 22