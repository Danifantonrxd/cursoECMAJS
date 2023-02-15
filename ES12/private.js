class Prueba {
    //Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Metodos privados solamente accesibles dentro de la clase
    #speak(){
        return "Hello";
    }
    #saludo(){
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