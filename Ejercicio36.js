/*BOSQUEJO
Hacemos un arreglo de 3
Ingresamos los numeros 
Si el primer numero es mayor que el tercero
y si el primero es mayor que el segundo
entonces decimos que el primer elemento es mayor
Sino decimos que el segundo elemento es mayor
Si no es ninguno entonces decimos
Si el tercer elemento es mayor que el segundo
decimos que el tercer elemento es mayor
Sino el segundo elemento es mayor
*/
/*PSEUDOCODIGO
 Algoritmo Ejercicio35
	Dimensionar arreglo(3)
	Para i <- 1 Hasta 3 Con Paso 1 Hacer
		Imprimir "Ingresar numero", i
		Leer n
		arreglo[i] <- n
	FinPara
	Para i <- 1 Hasta 3 Con Paso 1 Hacer 
		Imprimir "Numero", i, ":", arreglo[i]
	FinPara
	Si arreglo[1]>arreglo[3]
		Si arreglo[1] > arreglo[2]
			Imprimir "El primer elemento es mayor"
		SiNo
			Imprimir "El segundo elemento es mayor"
		FinSi
	SiNo
		si arreglo[3]>arreglo[2]
			Imprimir "El tercer elemento es mayor"
		SiNo
			Imprimir "El segundo elemento es mayor"
		FinSi
	FinSi
FinAlgoritmo */
const read = require("prompt-sync")();
const arreglo = [];
//const arreglo = new Array(3);
for (let i = 0; i < 3; i++) {
  const n = read("Ingrese el numero " + i + ": ");
  arreglo[i] = parseInt(n);
}
if (arreglo[0] > arreglo[2]) {
  if (arreglo[0] > arreglo[1]) {
    console.log("El primer elemento es mayor");
  } else {
    console.log("El segundo elemento es mayor");
  }
} else {
  if (arreglo[2] > arreglo[1]) {
    console.log("El tercer elemento es mayor");
  } else {
    console.log("El segundo elemento es mayor");
  }
}
