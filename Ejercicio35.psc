Algoritmo Ejercicio34
	Dimensionar arreglo(5)
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Imprimir "Ingrese el numero", i
		Leer n 
		arreglo[i] <- n
	FinPara
	Para i <- 1 Hasta 5 Con Paso 1 hacer
		Imprimir "Numero", i, ":", arreglo[i]
	FinPara
	Si arreglo[1] mod 2 = 0
		Imprimir "El primer elemento es par"
		si arreglo[5] mod 2 = 1
			Imprimir "El ultimo elemento es impar"
		FinSi
	FinSi
	
	
	
FinAlgoritmo
