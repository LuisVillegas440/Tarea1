/*
BOSQUEJO
Primero pedimos el primer numero
Pedimos el segundo numero
Hacemos la suma de los numeros
*/
/*
PSEUDOCODIGO 
Algoritmo Dosnumeros
	Imprimir "Dame el primer numero"
	Leer n1
	Imprimir "Dame el segundo numero"
	Leer n2
	r = n1 + n2
	Imprimir "El resultado es:", r
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const num1 = read("Ingresar el primer numero: ");
const num2 = read("Ingresar el segundo numero: ");
const r = parseInt(num1) + parseInt(num2);
console.log("El resultado de la suma es: ", r);
