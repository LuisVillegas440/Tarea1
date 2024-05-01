/*BOSQUEJO
Pedimos una letra
Apartamos las vocales y consonante
Al ser las  vocales menos letras
Comparamos la letra ingresada con las vocales
Si son iguales a vocales 
Decimos que la letra es una vocal
Sino automaticamente decimmos que es una consonante
*/
/*PSEUDOCODIGO
 Algoritmo Consonante_Vocales
	Definir letra Como Caracter
	Imprimir "Dame una letra"
	Leer letra
	Si letra = "a" o letra = "e" o letra = "i" o letra = "o" o letra = "u" o letra = "A" o letra = "E" o letra = "I" o letra = "O" o letra = "U"
		Imprimir "Es una vocal"
	Sino 
		Imprimir "Es una consonante"
	FinSi
	
FinAlgoritmo */
const read = require("prompt-sync")();
const letra = read("Ingresar letra: ");
if (
  letra == "a" ||
  letra == "e" ||
  letra == "i" ||
  letra == "o" ||
  letra == "u" ||
  letra == "A" ||
  letra == "E" ||
  letra == "I" ||
  letra == "O" ||
  letra == "U"
) {
  console.log("Es una vocal");
} else {
  console.log("Es una consonante");
}
