/*BOSQUEJO
Hacemos un arreglo de 5
Rellenamos los arreglos con nombres
Una vez llenos los arreglos con los nombres
Guardamos el primer arreglo en una variable llamada 'x', para que esta no se pierda
Luego hacemos que nuestro arreglo[0] tome a arreglo[4]
Una vez que nuestro arreglo[4] este en el arreglo[0]
A nuestro arreglo[4] le asignamos nuestra variable 'x' que contiene el arreglo[0]
Para que se puedan intercambiar de valor con el primero y el ultimo
*/
/*PSEUDOCODIGO
 Algoritmo cambiar_el_primero_por_el_ultimo
	Dimensionar arreglo(5)
	arreglo[1]="Andy"
	arreglo[2]="Luis"
	arreglo[3]="Pedro"
	arreglo[4]="Gustavo"
	arreglo[5]="Fulano"
	Imprimir arreglo[1]
	Imprimir arreglo[2]
	Imprimir arreglo[3]
	Imprimir arreglo[4]
	Imprimir arreglo[5]
	Imprimir "Despues del cambio"
	x = arreglo[1]
	arreglo[1]=arreglo[5]
	arreglo[5]= x

	

	
	Imprimir arreglo[1]
	Imprimir arreglo[2]
	Imprimir arreglo[3]
	Imprimir arreglo[4]
	Imprimir arreglo[5]
FinAlgoritmo */
const read = require('prompt-sync')();
const arreglo = ['Andy','Luis','Pedro','Gustavo','Fulano']
const x = arreglo[0]
arreglo[0] = arreglo[4]
arreglo[4] = x
console.log(arreglo);

