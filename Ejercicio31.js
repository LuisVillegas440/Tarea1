/* BOSQUEJO
Pedir sueldo mensual
Multiplicamos el sueldo por 12 para sacar el  sueldo anual
Si el sueldo anual supera los 30000
Entonces se le aplica un impuesto de 15 por ciento
y si no, no se le aplica nada
*/
/* PSEUDOCODIGO
Algoritmo Ejercicio30
	Imprimir "Cual es su sueldo mensual?"
	leer sueldo
	sueldo_anual = sueldo * 12
	impuesto = 0
	si sueldo_anual>30000
		impuesto= sueldo_anual * 15 / 100
	FinSi
	sueldo_anual = sueldo_anual - impuesto
	Imprimir "Su sueldo neto anual es: ", sueldo_anual
FinAlgoritmo
 */
const read = require("prompt-sync")();
const sueldo = read("Cual es su sueldo mensual: ");
let sueldo_anual = parseFloat(sueldo) * 12;
let impuesto = 0;
if (sueldo_anual > 30000) {
  impuesto = (parseFloat(sueldo_anual) * 15) / 100;
}
sueldo_anual = sueldo_anual - impuesto;
console.log("Su sueldo neto anual es: ", sueldo_anual);
