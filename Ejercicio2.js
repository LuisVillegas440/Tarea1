/*
BOSQUEJO
Primero pido la primera palabra
Pido la segunda palabra
Y las uno
*/

/* 
PSEUDOCODIGO
Algoritmo Unir
	Imprimir "Dime la primera palabra"
	Leer palabra_1
	Imprimir "Dime la segunda palabra"
	Leer palabra_2
	Imprimir palabra_1 + palabra_2
FinAlgoritmo
 */
const read = require("prompt-sync")();
const word = read('Ingrese la primera palabra: ');
const word2= read('Ingrese la segunda palabra: ');
console.log (word, word2);
