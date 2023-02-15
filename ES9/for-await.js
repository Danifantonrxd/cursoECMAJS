async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(["Alexa", "Oscar", "David"]);
console.log("After");

//Cada vez que usamos una async function es como si le
//dijeramos a la maquina: "Escucha, lo que esta aqui adentro
//lo ejecutas en segundo plano para que puedas seguir haciendo otra cosa"