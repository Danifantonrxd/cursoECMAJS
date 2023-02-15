const user = {username: "Danifanton", age: 22, country: "VEN"};

//Creamos 2 nuevas variables con spread
//username = "Danifanton"
//values = {age: 22, country: "VEN"}
const {username, ...values} = user; 

console.log(username);
console.log(values);

const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

original === copia // false
original["datos"] === copia["datos"] // true

console.log(original);
console.log(copia);