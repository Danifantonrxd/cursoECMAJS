let fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Async!!"), 2000)
        : reject(new Error("Error!"));
    });
};

fnAsync()
    .then(() => console.log("Correcto!"))
    .catch(() => console.log("Error"))
    .finally(() => console.log("Finally"));