/*BOSQUEJO
Pedir la nota al  usuario
Si la  nota es mayor igual que 60
Decimos  que esta aprobado
Sino esta  reprobado
*/
/*PSEUDOCODIGO
 Algoritmo Aprobado_Reprobado
	Imprimir "Por favor, ingresar su nota"
	leer nota 
	Si nota>=60
		Imprimir "Usted ha reprobado"
	SiNo
		Imprimir "Usted esta reprobado"
	finsi
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const nota = read("Por favor, ingresar nota: ");
if (nota >= 60) {
  console.log("Usted ha aprobado");
} else {
  console.log("Usted esta reprobado");
}
