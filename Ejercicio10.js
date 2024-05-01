/*BOSQUEJO
Ingresamos el primer numero
Ingresamos el segundo numero
Comparamos los numeros
Si el primer numero es mayor, se mostrara n1
Y Si no se mostrara n2
*/
/*PSEUDOCODIGO
 Algoritmo mayoromenor
	Imprimir "ingresar numero 1"
	Leer n1
	Imprimir "ingresar numero 2"
	Leer n2
	Si n1>n2
		m = n1
	SiNo
		m = n2
	FinSi
	Imprimir "El numero mayor es:", m
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const n1 = read("Ingresar numero 1: ");
const n2 = read("Ingresar numero 2: ");
let mayor = 0;
if (n1 > n2) {
  mayor = n1;
} else {
  mayor = n2;
}
console.log("El número mayor es", mayor);
