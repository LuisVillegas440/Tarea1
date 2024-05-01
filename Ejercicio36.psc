Algoritmo Ejercicio35
	Dimensionar arreglo(3)
	Para i <- 1 Hasta 3 Con Paso 1 Hacer
		Imprimir "Ingresar numero", i
		Leer n
		arreglo[i] <- n
	FinPara
	Para i <- 1 Hasta 3 Con Paso 1 Hacer 
		Imprimir "Numero", i, ":", arreglo[i]
	FinPara
	Si arreglo[1]>arreglo[3]
		Imprimir "El primer elemento es mayor"
	SiNo
		si arreglo[2]>arreglo[3]
			Imprimir "El segundo elemento es mayor"
		SiNo
			Imprimir "El tercer elemento es mayor"
		FinSi
	FinSi
FinAlgoritmo

