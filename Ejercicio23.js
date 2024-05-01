/*BOSQUEJO
Primero pedimos el numero
Dividimos ese numero a 3
Si el mod es 0 entonces decimos que si es multiplo de 3
Sino decimos que no es multiplo de 3
*/
/* PSEUDOCODIGO
 Algoritmo Multiplo_3
	Definir n Como Entero
	Imprimir "Ingresar numero"
	Leer n
	si n mod 3=0
		Imprimir "El numero es multiplo de 3 "
	SiNo
		Imprimir "El numero no es multiplo de 3"
		
		
	FinSi
FinAlgoritmo
 */
const read = require("prompt-sync")();
const num = read("Ingresar numero: ");
if (num % 3 == 0) {
  console.log("El numero es multiplo de 3");
} else {
  console.log("El numero no es multiplo de 3");
}
