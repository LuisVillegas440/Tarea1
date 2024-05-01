/*PSEUDOCOD Algoritmo sacar_iva
	Imprimir "Ingresar monto total de la factura"
	Leer monto_
	Imprimir "Ingresar el iva aplicado"
	Leer iva
	total_a_pagar = monto_ * iva / 100
	Imprimir "El monto total a pagar con iva incluido es:", total_a_pagar + monto_
FinAlgoritmo
	 */
const read = require("prompt-sync")();
const monto = read("Ingresar monto total de la factura: ");
const iva = read("Ingresar el iva aplicado: ");
const impuesto = (parseFloat(monto) * parseFloat(iva)) / 100;
const total_a_pagar = parseFloat(monto) + impuesto;
console.log("El monto total a pagar con iva incluido es: ", total_a_pagar);
