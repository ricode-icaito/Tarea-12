/*Programa solicitando al usuario un (numero) que muestre la nota de su calificacion e indicarle segun su nota, por medio de un alert a que rango pertenece y si introduce un numero menor a cero o mayor a 10 decirle que es una nota erronea y tambien si no escribe numero indicarle que introduzca un numero valido*/ 
do {
	var nota = prompt("Introduce tu nota:");
	
	if (Number(nota) == nota) {
		if (nota > 0 && nota <= 10) {
			if (nota <= 3) {
				alert("Muy deficiente");
			}
			else if (nota <= 5) {
				alert("Insuficiente");
			}
			else if (nota >= 5.1 && nota <=6) {
				alert("Suficiente");
			}
			else if (nota >= 6.1 && nota <= 7) {
				alert("Bien");
			}
			else if (nota >= 7.1 && nota <=9) {
				alert("Notable"); 5
			}
			else if (nota >= 9.1 && 10) {
				alert("Sobresaliente");
			}
		}
	
		else {
			alert("Nota erronea, da click en aceptar e introduce un numero entre 1 y 10.");
		}
	}
	
	else {
	
		if (nota != undefined) {	 
			alert("Introduce un numero valido.");
		}
	}

} while (nota != undefined);	