// Función para solicitar la temperatura en grados Celsius
function solicitarTemperatura() {
    let temperatura;
    
    // Validar que el dato ingresado sea un número
    while (true) {
      let entrada = prompt("Ingresa la temperatura en grados Celsius:");
      temperatura = parseFloat(entrada);
  
      if (!isNaN(temperatura)) {
        break; // Sale del ciclo si la entrada es válida
      } else {
        alert("Error: Debes ingresar un número válido.");
      }
    }
  
    return temperatura;
  }
  
  // Función para convertir la temperatura
  function convertirTemperatura(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
  
    // Mostrar los resultados por consola
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
  
    // También mostrar los resultados en el DOM
    document.body.innerHTML = `
      <h2>Resultados de Conversión</h2>
      <p>Grados Celsius: ${celsius}</p>
      <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
      <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
    `;
  }
  
  // Ejecutar el programa
  let celsius = solicitarTemperatura();
  convertirTemperatura(celsius);
  