class User {
    constructor(){
        console.log("Nuevo Usuario");
    }
    saludo() {
        console.log("Hola Daniel!");
    }
};

const newUser = new User();

class Nombre {
    constructor(name){
        this.name = name;
    }
    speak(){
        return "Hello";
    }
    saludo(){
        return `${this.speak()} ${this.name}!!`;
    }
};

const Hola = new Nombre();

class Prueba {
    //Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Metodos
    speak(){
        return "Hello";
    }
    saludo(){
        return `${this.speak()} ${this.name}!!`;
    }
    //Getters y Setters
    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
};

const Nuevo = new Prueba("Daniel", 22);
let aux = Nuevo.uAge;
console.log(aux);

Nuevo.uAge = 23;
aux = Nuevo.uAge;
console.log(aux);