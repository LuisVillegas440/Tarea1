Algoritmo Ejercicio29
	Imprimir "Ingresar precios de los carros nuevos en venta"
	leer precio
	Imprimir "En que año fue fabricado?"
	leer ano
	descuento = 0
	si ano<2010
		descuento = precio * 10 / 100
	FinSi
	precio = precio - descuento
	Imprimir "Total a pagar con descuento es:", precio
FinAlgoritmo
