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
		Si arreglo[1] > arreglo[2]
			Imprimir "El primer elemento es mayor"
		SiNo
			Imprimir "El segundo elemento es mayor"
		FinSi
	SiNo
		si arreglo[3]>arreglo[2]
			Imprimir "El tercer elemento es mayor"
		SiNo
			Imprimir "El segundo elemento es mayor"
		FinSi
	FinSi
FinAlgoritmo

