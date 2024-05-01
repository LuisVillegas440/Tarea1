/*BOSQUEJO
Primero pedimos el numero
Se imprime primero el numero que se guarda en la variable
Unimos nuestra variables con nuestro texto "x 1"
Y resolvemos
*/
/*PSEUDOCODIGO 
Algoritmo tablademultiplicar
	Imprimir "Ingresar numero"
	Leer n
	Imprimir ConvertirATexto(n) + "x1=" + ConvertirATexto(n*1)
	Imprimir ConvertirATexto(n) + "x2=" + ConvertirATexto(n*2)
	Imprimir ConvertirATexto(n) + "x3=" + ConvertirATexto(n*3)
	Imprimir ConvertirATexto(n) + "x4=" + ConvertirATexto(n*4)
	Imprimir ConvertirATexto(n) + "x5=" + ConvertirATexto(n*5)
	Imprimir ConvertirATexto(n) + "x6=" + ConvertirATexto(n*6)
	Imprimir ConvertirATexto(n) + "x7=" + ConvertirATexto(n*7)
	Imprimir ConvertirATexto(n) + "x8=" + ConvertirATexto(n*8)
	Imprimir ConvertirATexto(n) + "x9=" + ConvertirATexto(n*9)
	Imprimir ConvertirATexto(n) + "x10=" + ConvertirATexto(n*10)
	
	
	
FinAlgoritmo */
const read = require("prompt-sync")();
const n = read("Ingresar numero: ");
console.log(n + " x 1 = " + n * 1);
console.log(n + " x 2 = " + n * 2);
console.log(n + " x 3 = " + n * 3);
console.log(n + " x 4 = " + n * 4);
console.log(n + " x 5 = " + n * 5);
console.log(n + " x 6 = " + n * 6);
console.log(n + " x 7 = " + n * 7);
console.log(n + " x 8 = " + n * 8);
console.log(n + " x 9 = " + n * 9);
console.log(n + " x 10 = " + n * 10);
