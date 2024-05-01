/*BOSQUEJO
Pedimos el primer nombre
Pedimos el segundo nombre
Vemos si son iguales
Si son iguales, Decimos que los nombres son iguales
Si el primer nombre es mayor decimos que el primer nombre es mayor
Sino decimos que el primer nombre es menor
*/
/*PSEUDOCODIGO
Algoritmo Mayor_Menor_igual
	Definir Nombre1, Nombre2 Como Caracter 
	Imprimir "Ingresar el primer nombre"
	Leer Nombre1
	Imprimir "Ingresar el segundo nombre"
	Leer Nombre2
	Si Nombre1=Nombre2
		Imprimir "Los nombres son iguales"
	SiNo
		si Nombre1 > Nombre2
			Imprimir "El primer nombre es mayor"
		Sino 
			Imprimir "El primer nombre es menor"
		FinSi
	FinSi

FinAlgoritmo
 */
const read = require("prompt-sync")();
const nombre1 = read("Ingresar el primer nombre: ");
const nombre2 = read("Ingresar el segundo nombre: ");
if (nombre1 == nombre2) {
  console.log("Los nombres son iguales");
} else {
  if (nombre1 > nombre2) {
    console.log("El primer nombre es mayor");
  } else {
    console.log("El primer nombre es menor");
  }
}
