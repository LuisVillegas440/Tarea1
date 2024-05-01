Algoritmo Ejercicio33
	Dimensionar arreglo(5)
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Imprimir "Ingrese el numero", i
		Leer n
		arreglo[i] <- n
	FinPara
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Imprimir "Numero ", i ":", arreglo[i]
	FinPara
	si arreglo[1]>arreglo[5]
		Imprimir "El primer elemento si es mayor que el ultimo"
		
	FinSi
FinAlgoritmo
