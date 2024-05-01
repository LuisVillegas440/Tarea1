/*BOSQUEJO
Hacemos un arreglo de 5
Comparamos el primer arreglo[0] con el ultimo arreglo[4]
Si es mayor
Mostramos que el primer elemento es mayor
*/
/*PSEUDOCODIGO
 Algoritmo Ejercicio33
	Dimensionar arreglo(5)
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Imprimir "Ingrese el numero", i
		Leer n
		arreglo[i] <- n
	FinPara
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Imprimir "Numero ", i ":", arreglo[i]
	FinPara
	si arreglo[1]>arreglo[5]
		Imprimir "El primer elemento si es mayor que el ultimo"
		
	FinSi
FinAlgoritmo
 */
const read = require("prompt-sync")();
const arreglo = [];
//const arreglo = new Array(5);
for (let i = 0; i < 5; i++) {
  const n = read("Ingrese el numero " + i + ": ");
  arreglo[i] = n;
}

for (let i = 0; i < 5; i++) {
  console.log("Numero", i + 1, ":", arreglo[i]);
}
if (arreglo[0] > arreglo[4]){
    console.log('El primer elemento si es mayor')
}