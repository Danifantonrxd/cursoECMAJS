const promise1 = new Promise((resolve, reject) => reject("Error"));
const promise2 = new Promise((resolve, reject) => resolve("Hecho!!"));
const promise3 = new Promise((resolve, reject) => resolve("Hecho 2!!"));

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);        
    });

//Se puede usar para llamar a varia APIs y usar la primera que 
//nos devuelva algo