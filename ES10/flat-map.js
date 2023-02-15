let array = [1,2,3,[4,5,6,[7,8,9]],10];

let aplanado = array.flat(3);//le pasamos la profundidad

console.log(array);
console.log(aplanado);

//flat-map

let array2 = [1,2,3,4,5];

array2 = array2.flatMap(x => x*2);

console.log(array2);