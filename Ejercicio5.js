/*
BOSQUEJO
Pedimos nombre
Y
Sumamos la edad mas 1

*/
/*
PSEUDOCODIGO
Algoritmo suedadmas1
	Imprimir "Por favor ingresar su edad"
	Leer edad
	r = edad + 1
	Imprimir "Su edad el anioo siguiente sera:", r
FinAlgoritmo 
*/
const read = require("prompt-sync")();
const edad = read("Por favor ingresar su edad: ");
const r = parseInt(edad) + 1;
console.log("Su edad el proximo año sera:", r);
