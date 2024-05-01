/*BOSQUEJO
Pedimos el precio del producto
Pedimos el descuento del producto
Multiplicamos el producto por el descuento y dividimos por  100  
Para obtener el precio final
*/
/*PSEUDOCODIGO
 Algoritmo Descuento_
	Imprimir "Ingrese el precio del producto"
	Leer producto
	Imprimir "Ingrese el descuento del producto"
	Leer descuento
	precio_final = producto * descuento / 100
	Imprimir "El precio final del producto con el descuento es de ", precio_final "$"
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const producto = read("Ingresar precio del producto: ");
const descuento = read('Ingrese el descuento del producto: ');
const precio_final = (parseFloat(producto) * parseFloat(descuento)) / 100;
console.log(
  "El precio final del producto con el descuento es de:",
  precio_final
);
