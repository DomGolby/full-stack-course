// set kelvin base value
const kelvin = 293;

let celsius = kelvin - 273;

let fahrenheit = celsius *(9/5) + 32;

fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees newton.`)
