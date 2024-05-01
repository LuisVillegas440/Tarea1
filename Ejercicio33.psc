Algoritmo Ejercicio32
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
FinAlgoritmo
