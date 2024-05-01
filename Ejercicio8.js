/* BOSQUEJO
Pedimos el nombre
Y
Lo presentamos 3 veces en pantalla
*/
/* PSEUDOCODIGO 
Algoritmo Pedirnombre
	Imprimir "Por favor ingresar nombre"
	Leer nombre
	Imprimir nombre
	Imprimir nombre
	Imprimir nombre
	
	
FinAlgoritmo
 */
const read = require('prompt-sync')();
const nombre = read('Por favor ingresar nombre: ');
console.log(nombre);
console.log(nombre);
console.log(nombre);