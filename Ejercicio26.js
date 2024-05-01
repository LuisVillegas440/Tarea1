/*BOSQUEJO
Pedimos numero
Para verificar si es de un solo digito o de mas
Decimos que si es mayor o igual que cero y menor igual que 9
Ya que si sobre pasa de de 0 a 9
Entonces se entiende que de mas digitos
*/
/* PSEUDOCODIGO
 Algoritmo Numero_de_un_solo_digito
	definir numero_ Como Entero
	imprimir "Ingresar numero"
	Leer numero_
	si numero_ >= 0 y numero_ <= 9
		Imprimir "El numero es de un solo digito"
	SiNo
		Imprimir "El numero es de mas de un solo digito"
	FinSi
FinAlgoritmo */
const read = require("prompt-sync")();
const num = read("Ingresar numero: ");
if ((num >= 0) & (num <= 9)) {
  console.log("El numero es de un solo digito");
} else {
  console.log("El numero es de mas de un solo digito");
}
