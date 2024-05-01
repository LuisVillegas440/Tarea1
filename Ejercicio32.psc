Algoritmo Ejercicio31
	Definir Tipo Como Caracter
	Definir precio_banano_inicial, Tamano, Precio_banano_final Como Entero
	Imprimir "Ingresar el precio del kilo de banano"
	Leer precio_banano_inicial
	Imprimir "Que tipo es A o B?"
	Leer Tipo
	Imprimir "Que tamaño es 1 o 2?"
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
