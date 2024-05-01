/*BOSQUEJO
Hacemos un arrelgo de 5 elementos
Ingresamos los numeros en cada arreglo
Y hacemos la suma de nuestros arreglos
*/
/*PSEUDOCODIGO
 Algoritmo Ejercicio36
	Dimensionar arreglo(5)
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Imprimir "Ingresar numero" i
		Leer n
		arreglo[i] <- n
	FinPara
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Imprimir "Numero", i, ":", arreglo[i]
	FinPara
	suma_de_arreglos = arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4] + arreglo[5]
	Imprimir "Esta es la suma total de los 5 elementos:", suma_de_arreglos
FinAlgoritmo
 */
const read = require("prompt-sync")();
const arreglo = [];
//const arreglo = new Array(3);
for (let i = 0; i < 5; i++) {
  const n = read("Ingrese el numero " + i + ": ");
  arreglo[i] = parseInt(n);
}
const suma_de_arreglos =
  arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4];
console.log("Esta es la suma total de los 5 elementos", suma_de_arreglos);
