/*BOSQUEJO
Pedimos un numero
Si el numero es igual que 100, decimos que es igual 
Si el numero es mayor, decimos que el numero es mayor
Sino decimos que el numero es menor
*/
/* PSEUDOCODIGO
Algoritmo Ejercicio25
	Imprimir "Ingresar numero"
	Leer n
	Si n=100
		Imprimir "El numero igual que 100"
	SiNo
		Si n>100
			Imprimir "El numero es mayor que 100"
		SiNo
			Imprimir "El numero es menor que 100"
		FinSi
	FinSi
	
	
FinAlgoritmo */
const read = require("prompt-sync")();
const num = read("Ingresar numero: ");
if (num == 100) {
  console.log("El numero es igual a 100");
} else {
  if (num > 100) {
    console.log("El numero es mayor que 100");
  } else {
    console.log("El numero es menor que 100");
  }
}
