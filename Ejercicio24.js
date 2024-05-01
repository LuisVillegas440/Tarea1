/*BOSQUEJO
Primero pedimos el numero
Dividimos ese numero a 2
Si el mod es 0 entonces decimos que si es multiplo de 2
Sino decimos que no es multiplo de 2
*/
/*PSEUDOCODIGO
 Algoritmo Divisible_para_2
	Definir n Como Entero
	Imprimir "Ingresar numero"
	Leer n
	Si n mod 2=0
		Imprimir "El numero es divisible para 2"
	SiNo
		Imprimir "El numero no es divisible para 2"
	FinSi
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const num = read("Ingresar numero: ");
if (num % 2 == 0) {
  console.log("El numero es divisible para 2");
} else {
  console.log("El numero no es divisible para 2");
}
