/*BOSQUEJO
Hacemos un arreglo de 5
Rellenamos los arreglo con nombres
Una vez lleno presentamos el primero, el de en medio y el ultimo arreglo
Imprimimos el arreglo[0]
El arreglo[2]
Y el ultimo arreglo[4]
*/
/*PSEUDOCODIGO
 Algoritmo arreglo_presentar_nombres
	Dimensionar arreglo(5)
	arreglo[1]="Andy"
	arreglo[2]="Luis"
	arreglo[3]="Pedro"
	arreglo[4]="Gustavo"
	arreglo[5]="Fulano"
	Imprimir arreglo[1]
	Imprimir arreglo[3]
	Imprimir arreglo[5]

	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const arreglo = ["Andy", "Luis", "Pedro", "Gustavo", "Fulano"];
console.log(arreglo[0]);
console.log(arreglo[2]);
console.log(arreglo[4]);
