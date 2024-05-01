/*
BOSQUEJO
Pedimos el numero que queremos multiplicar
Lo multiplicamos por 2
*/
/*
PSEUDOCODIGO 
Algoritmo sudoble
	Imprimir "Ingrese el numero que quiere multiplicar"
	Leer n
	r = n * 2
	Imprimir "El resultado es:", r
	
FinAlgoritmo */
const read = require('prompt-sync')();
const num = read('Ingrese el numero que quiere multiplicar:' );
const r = parseInt(num) * 2;
console.log('Su doble es: ',r);