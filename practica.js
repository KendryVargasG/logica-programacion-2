
//Código inicial, se realizó y se probó con la terminal integrada de visual, sin embargo se deja el código
// Como comentario ya que no funciona con la index tal como está
//const prompt = require('prompt-sync')();


//let celsius = Number(prompt("Por favor ingrese la temperatura en grados Celsius:"));
    
   // while (Number.isNaN(celsius)) {
        
        //  console.log ("Dato inválido, debe ingresar un número.");

        //  celsius = Number(prompt("Por favor ingrese la temperatura en grados Celsius:")); 

   // }

//let fahrenheit = (celsius * 9 / 5) + 32;
//let kelvin     = celsius + 273.15;

           //console.log("Grados Fahrenheit: " + fahrenheit.toFixed(2));
           //console.log("Grados Kelvin: " + kelvin.toFixed(2));

// Nuevo código
console.log("JS conectado");
const boton = document.getElementById("btnConvertir");

boton.addEventListener("click", function () {

    let celsius = Number(document.getElementById("celsius").value);

    if (Number.isNaN(celsius) || document.getElementById("celsius").value === "") {

        alert("Dato inválido, debe ingresar un número.");
        return;
    }

    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    document.getElementById("resultadoCelsius").textContent =
        celsius.toFixed(2) + " °C";

    document.getElementById("resultadoFahrenheit").textContent =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("resultadoKelvin").textContent =
        kelvin.toFixed(2) + " K";
});