const prompt = require('prompt-sync')();


let celsius = Number(prompt("Por favor ingrese la temperatura en grados Celsius:"));
    
    while (Number.isNaN(celsius)) {
        
          console.log ("Dato inválido, debe ingresar un número.");

          celsius = Number(prompt("Por favor ingrese la temperatura en grados Celsius:")); 

    }

let fahrenheit = (celsius * 9 / 5) + 32;
let kelvin     = celsius + 273.15;

           console.log("Grados Fahrenheit: " + fahrenheit.toFixed(2));
           console.log("Grados Kelvin: " + kelvin.toFixed(2));
