function* iterate(array){
    for(value of array){
        yield value;
    }
}

let aux = ["Ana", "Daniel", "Jennifer"];
const it = iterate(aux);

function* getId() { //Genera codigos aleatorios
    while (true) {
      let x = Math.random();
      x = x.toString(36);
      x = x.substring(5,10);
      x = x.toUpperCase();
      yield x;
    }
}

//    Set-add

const list = new Set();

list.add("Daniel").add("Juana");
list.add("LaCubana");

