const boton = document.querySelector("#btn");

boton.addEventListener("click", hola);

async function hola(){
    const modulo = await import("./modulo.js");
    console.log(modulo);
    modulo.hellow(); 
}