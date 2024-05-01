/*BOSQUEJO
Preguntamos la edad
Si la edad es mayor o igual que 18
Decimos que es mayor de edad
Y sino
Decimos que es menor de edad
*/
/*PSEUDOCODIGO Algoritmo Si_es_legal_o_No
	Imprimir "Cual es su edad?"
	Leer edad
	si edad>18
		Imprimir "Usted es mayor de edad"
	Sino 
		Imprimir "Usted es menor de edad"
	FinSi
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const edad = read("Cual es su edad: ?");
if (edad >= 18) {
  console.log("Usted es mayor de edad");
} else {
  console.log("Usted es menor de edad");
}
