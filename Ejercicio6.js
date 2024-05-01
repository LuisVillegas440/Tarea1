/*
BOSQUEJo
Pedimos el primer numero
Pedimos el segundo numero
Multiplicamos ambos numero para tener el resultado
*/
/*
PSEUDOCODIGO 
Algoritmo multiplicardosnumeros
	Imprimir "Ingresar numero 1"
	Leer n1
	Imprimir "Ingresar numero 2"
	Leer n2
	r = n1 * n2
	Imprimir "El resultado es:", r
	
FinAlgoritmo */
const read = require('prompt-sync')();
const num1 = read('Ingresar el primer numero: ');
const num2 = read('Ingresar el segundo numero: ');
const r = parseInt(num1) * parseInt(num2);
console.log('El resultado al multiplicar estos dos numeros son:',r);
