/* BOSQUEJO
Pedimos la temperatura en celsisus
Y para convertirla en fahrenheit la multiplicamos por 1.8 y le sumamos 32
Para obtener la conversion de temperatura celsius a fahrenheit
*/
/* PSEUDOCODIGO
 Algoritmo Converirtemperaturas
	Imprimir "Ingresar temperatura en celsius"
	Leer temperatura_C
	temperatura_f = temperatura_C * 1.8 + 32
	Imprimir "La temperatura convertida a fahrenheit es:", temperatura_f
	
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const temperatura_C = read("Ingresar la temperatura en grados celsius: ");
const temperatura_f = parseInt(temperatura_C) * 1.8 + 32;
console.log(
  "La temperatura en celsius convertida en fahrenheit es:",
  temperatura_f
);
