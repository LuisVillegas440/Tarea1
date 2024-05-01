/*BOSQUEJO
Pedimos un numero
Comparamos si el numero es mayor igual o menor que 0
SI el numero es mayor igual que 0 decimos que es positivo
Sino decimos que el numero es negativo
*/
/*PSEUDOCODIGO
\ Algoritmo Ver_si_es_negativo_o_positivo
	Imprimir "Ingresar numero"
	Leer n
	si n>0
		Imprimir "El numero es postivo"
	sino 
		Imprimir "El numero es negativo"
	FinSi
	
FinAlgoritmo
 */
const read = require('prompt-sync')();
const num = read('Ingresar numero: ');
if (num >= 0) {
    console.log('El numero es positivo');
} else {
    console.log('El numero es negativo');
}