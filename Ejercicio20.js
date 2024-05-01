/*BOSQUEJO
Pedimos el primer numero
Pedimos el segundo numero
Comparamos los dos numeros
Si los numeros son iguales, decimos que son iguales
Sino decimos que son diferentes
*/
/*PSEUDOCODIGO
 Algoritmo Iguales_o_diferentes
	Imprimir "Ingresar el primer numero"
	Leer n1
	Imprimir "Ingresar el segundo numero"
	Leer n2
	si n1=n2
		Imprimir "Los numeros son iguales"
	sino 
		Imprimir  "Los numeros son diferentes"
	Fin si
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const n1 = read("Ingresar el primer numero: ");
const n2 = read("Ingresar el segundo numero: ");
if (n1 == n2) {
  console.log("Los numeros son iguales");
} else {
  console.log("Los numeros no son iguales");
}
