Algoritmo sacar_iva
	Imprimir "Ingresar monto total de la factura"
	Leer monto_
	Imprimir "Ingresar el iva aplicado"
	Leer iva
	total_a_pagar = monto_ * iva / 100
	Imprimir "El monto total a pagar con iva incluido es:", total_a_pagar + monto_
FinAlgoritmo
	