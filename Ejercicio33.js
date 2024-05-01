/* Algoritmo Ejercicio32
	Definir  costo_por_personas, numero_persona, costo_del_platillo Como Entero
	Imprimir "Cuantas personas son?"
	Leer numero_persona
	costo_del_platillo=20
	si numero_persona>100
		si numero_persona <= 200
			costo_del_platillo=15
		SiNo
			costo_del_platillo=10
		FinSi
	FinSi
	subtotal= numero_persona * costo_del_platillo
	impuesto= subtotal*15/100
	total= subtotal+impuesto
	Imprimir  "Este es el presupuesto final, incluyendo el iva", total
FinAlgoritmo */
const read = require("prompt-sync")();
const numero_persona_texto = read("Cuantas personas son: ");
const numero_persona = parseInt(numero_persona_texto);
const costo_del_platillo = 20;
if (numero_persona > 100) {
  if (numero_persona <= 200) {
    costo_del_platillo == 15;
  } else {
    costo_del_platillo == 10;
  }
}
const subtotal = numero_persona * costo_del_platillo;
const impuesto = (subtotal * 15) / 100;
const total = subtotal + impuesto;
console.log("Este es el presupuesto final, incluyendo el iva", total);
