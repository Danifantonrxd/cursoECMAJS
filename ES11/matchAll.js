let regex = /\b(Apple)+\b/g;

let fruits = "Banana, Cambur, Apple, Naranja";

for(match of fruits.matchAll(regex)){
    console.log(match);
}

