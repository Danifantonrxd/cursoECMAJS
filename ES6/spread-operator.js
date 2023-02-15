//-----------------------------------------

//Spread operator

let person = { name: "Daniel", age: 22};
let country = "VEN";

let data = { ...person, country};

// Output = {name: "Daniel", age: 22, country: "VEN"}; //GREAT!!

// REST ------------------------------------------_//

function sum(num, ...values){
    return (num + (values.reduce((a, b) => a + b)));
}

