Algoritmo Ejercicio30
	Imprimir "Cual es su sueldo mensual?"
	leer sueldo
	sueldo_anual = sueldo * 12
	impuesto = 0
	si sueldo_anual>30000
		impuesto= sueldo_anual * 15 / 100
	FinSi
	sueldo_anual = sueldo_anual - impuesto
	Imprimir "Su sueldo neto anual es: ", sueldo_anual
FinAlgoritmo
