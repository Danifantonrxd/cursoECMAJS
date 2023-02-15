//------------------------------------__//
// Enhanced object literals
//---------------------------------------_///

function newUser(user, age, country){
    return {
        user: user,
        age: age,
        country: country
    };
}

//es igual a 

function newUser(user, age, country){
    return {
        user,
        age,
        country,
    };
}