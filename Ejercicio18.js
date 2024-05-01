/*BOSQUEJO
Pedimos un numero
Si la division de estos numero es cero
Entonces decimos que es par
Sino decimos que es impar
*/
/*PSEUDOCODIGO
 Algoritmo Es_par_o_impar
	Imprimir "Ingresar numero"
	Leer n
	si n mod 2=0
		Imprimir "el numero es par"
	SiNo
		Imprimir "el numero es impar"
		
	FinSi
	
FinAlgoritmo */
const read = require("prompt-sync")();
const num = read("Ingresar numero: ");
if (num % 2 == 0) {
  console.log("El numero es par");
} else {
  console.log("El numero es impar");
}
