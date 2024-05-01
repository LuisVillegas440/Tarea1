/*BOSQUEJO
Pedimos el precio inicial del kilo de banano
Pedimos si es tipo A o B
Pedimos si es de tamanio 1 o 2
Verficamos si es de A
Si es de tipo entonces pedimos el tamano 1 o 2
Si es de tamano 1 se le suma dos
Sino se le suma tres
Sino es de tipo A
Entonces de tipo B
Vemos si es de tamanio 1 o 2
Si es de tamano 1 le restamos 3
Y sino le restamos 5
*/
/*PSEUDOCODIGO
 Algoritmo Ejercicio31
	Definir Tipo Como Caracter
	Definir precio_banano_inicial, Tamano, Precio_banano_final Como Entero
	Imprimir "Ingresar el precio del kilo de banano"
	Leer precio_banano_inicial
	Imprimir "Que tipo es A o B?"
	Leer Tipo
	Imprimir "Que tamanio es 1 o 2?"
	Leer Tamano
	Si Tipo = "A"
		Si Tamano = 1
			Precio_banano_final = precio_banano_inicial + 2
		Sino
			Precio_banano_final = precio_banano_inicial + 3
		FinSi
	Sino
		si Tipo = "B"
			si Tamano = 1
				Precio_banano_final = precio_banano_inicial - 3
			SiNo
				Precio_banano_final = precio_banano_inicial - 5
			FinSi
		FinSi
	FinSi
	Imprimir "Este es el precio final", Precio_banano_final
	
FinAlgoritmo
 */
const read = require("prompt-sync")();
const precio_banano_inicial_texto = read("El precio inical del kilo de banano: ");
const precio_banano_inicial = parseFloat(precio_banano_inicial_texto);
const Tipo = read("Que tipo es A o B: ");
const Tamano = read("Que tamanio es 1 o 2: ");
let precio_banano_final = 0;
if (Tipo == "A") {
  if (Tamano == 1) {
    precio_banano_final = precio_banano_inicial + 2;
  } else {
    precio_banano_final = precio_banano_inicial + 3;
  }
} else {
  if (Tipo == "B") {
    if (Tamano == 1) {
      precio_banano_final = precio_banano_inicial - 3;
    } else {
      precio_banano_final = precio_banano_inicial - 5;
    }
  }
}
console.log('Este es el precio final: ', precio_banano_final);
