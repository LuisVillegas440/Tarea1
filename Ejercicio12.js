/*BOSQUEJO
Hacemos un arreglo de 5 numeros
Le indicamos a la maquina que nos vaya pidiendo los numero de uno en uno
Una vez teniendo nuestros 5 numeros en nuestro arreglo
Le decimos a la maquina que nos muestre los numeros que guardamos en cada arreglo
*/
/* PSEUDOCODIGO
Algoritmo arreglo_ejercio
	Dimensionar arreglo(5)
	Para i<-1 Hasta 5 Con Paso 1 Hacer
		Escribir 'Ingrese el numero ', i
		Leer n
		arreglo[i] <- n
	FinPara
	Para i<-1 Hasta 5 Con Paso 1 Hacer
		Escribir 'numero ', i, ':', arreglo[i]
	FinPara
FinAlgoritmo
 */
const read = require("prompt-sync")();
const arreglo = [];
//const arreglo = new Array(5);
for (let i = 0; i < 5; i++) {
  const n = read("Ingrese el numero " + i + ": ");
  arreglo[i] = n;
}

for (let i = 0; i < 5; i++) {
  console.log("Numero", i + 1, ":", arreglo[i]);
}
