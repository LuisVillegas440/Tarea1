/*BOSQUEJO
Pedimos la distancia a metros
Multiplicamos la distancia en metros por 100
Para obtener la distancia en centimetros
*/
/*PSEUDOCODIGO
 Algoritmo metros_a_distancia
	Imprimir "Ingresar la distancia a metros"
	Leer d_m
	d_cm = d_m * 100
	Imprimir "La distancia en centimetros es:", d_cm
	
FinAlgoritmo
 */
const read = require('prompt-sync')();
const distancia_m = read('Ingresar la distancia en metros: ');
const d_cm = parseFloat(distancia_m) * 100;
console.log('La distancia en centimetros es: ',d_cm);
