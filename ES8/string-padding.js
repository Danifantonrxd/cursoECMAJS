let string = "Hola";

string = string.padStart(9, "Mundo");

console.log(string);

string = string.padEnd(14, "_");

console.log(string);

//Estoy diciendo que quiero un string de 14 caracteres y los nuevos los
//rellene con lo que mando