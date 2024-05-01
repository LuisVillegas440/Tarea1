/*BOSQUEJO
Hacemos un arreglo de 5
Si el primer arreglo[0]
Nos queda mod 0 entonces es par
Y si no, nuestro ultimo arreglo[4] es impar
*/
/*PSEUDOCODIGO
 Algoritmo Ejercicio34
	Dimensionar arreglo(5)
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Imprimir "Ingrese el numero", i
		Leer n 
		arreglo[i] <- n
	FinPara
	Para i <- 1 Hasta 5 Con Paso 1 hacer
		Imprimir "Numero", i, ":", arreglo[i]
	FinPara
	Si arreglo[1] mod 2 = 0
		Imprimir "El primer elemento es par"
	FinSi
    si arreglo[5] mod 2 = 1
        Imprimir "El ultimo elemento es impar"
    FinSi
FinAlgoritmo */
const read = require("prompt-sync")();
const arreglo = [];
//const arreglo = new Array(5);
for (let i = 0; i < 5; i++) {
  const n = read("Ingrese el numero " + i + ": ");
  arreglo[i] = parseInt(n);
}

for (let i = 0; i < 5; i++) {
  console.log("Numero", i + 1, ":", arreglo[i]);
}
if (arreglo[0] % 2 == 0) {
  console.log("El primer elemento es par");
}
if (arreglo[4] % 2 == 1) {
  console.log("El ultimo elemento es impar");
}
