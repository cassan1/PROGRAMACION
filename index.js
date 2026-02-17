const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question("¿cual es tu nombre? ", function(nombre){
    rl.question("¿cual es tu edad?", function(edad){

        edad = parseInt(edad);
        if (isNaN(edad)){
            console.log("por favor ingresa una edad valida.");
        }else if(edad >=18){
            console.log("Hola "+ nombre + ", eres mayor de edad.");
        }else{
            console.log("Hola "+ nombre +", eres menor de edad.");
        }

        rl.close();
    });
});