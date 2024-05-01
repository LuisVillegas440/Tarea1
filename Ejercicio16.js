/*BOSQUEJO
Pedimos el numero que queremos comparar
Comparamos el numero si mayor o menor que 10
Si es mayor, entonces mostrara que el numero es mayor
Si es menor, entonces mostrara que el numero es menor
*/
/*PSEUDOCODIGO
 Algoritmo mostrar_si_es_mayor_o_menor
	Imprimir "Ingresar numero:"
	Leer n
	si n>10
		Imprimir "es mayor que diez"
	SiNo
		si n=10
			Imprimir "es diez"
		SiNo
			Imprimir "es menor que diez"
		FinSi
		
	FinSi
	
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const num = read("Ingresar numero: ");
if (num >= 10) {
  console.log("El numero es mayor");
} else {
  console.log("El numero es menor");
}