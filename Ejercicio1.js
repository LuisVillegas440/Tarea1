/*
BOSQUEJO
Primero le pedimos el nombre
Luego lo saludamos
*/

/* 
PSEUDOCODIGO
Algoritmo Pedirnombre
	Imprimir "Me podrias decir tu nombre?"
	leer nombre
	Imprimir "Hola", nombre	
FinAlgoritmo
*/
const read = require("prompt-sync")();
const name = read("Me podrias decir tu nombre? ");
console.log("Hola", name);
