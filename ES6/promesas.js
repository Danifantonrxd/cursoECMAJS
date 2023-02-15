//---------------------------------------//
// Promesas
//-------------------------------------_//

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Yeeihh!!");
        }
        else{
            reject("Uuupss..");
        }
    });
};


anotherFunction().then(response => console.log(response));
anotherFunction().catch(err => console.log(err));

//Tambien sirve asi

anotherFunction()
    .then(response => console.log(response))  //SE CONCATENA SOLO
    .catch(err => console.log(err));