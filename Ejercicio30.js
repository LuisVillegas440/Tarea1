/*BOSQUEJO
Pedimos el  precio de los  vehiculos
Pedimos el  anio del  vehiculo
Si el vehiculo es menor igual que 2010
Se le  aplica descuento
Si no, no se  le aplica descuento

*/
/*PSEUDOCODIGO
 Algoritmo Ejercicio29
	Imprimir "Ingresar precios de los carros nuevos en venta"
	leer precio
	Imprimir "En que anio fue fabricado?"
	leer ano
	descuento = 0
	si ano<2010
		descuento = precio * 10 / 100
	FinSi
	precio = precio - descuento
	Imprimir "Total a pagar con descuento es:", precio
FinAlgoritmo */
const read = require("prompt-sync")();
let precio = read("Ingresar precio de  los carros nuevos en venta: ");
const anio = read("En que anio fue fabricado: ");
const descuento = 0;
if (anio <= 2010) {
  precio = (parseFloat(precio) * 10) / 100;
}
precio = precio - descuento;
console.log("Total a pagar con descuento es: ", precio);
