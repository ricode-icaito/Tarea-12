/*Programa que solicita la edad del usuario y si ya es mayor o igual a 18 años indicarle por pantalla que ya puede conducir, de lo contrario si es menor de 18 años decirle por pantalla que no peuede conducir y si ingresa letras en lugar de numeros indicarle por medio de un alert que introdusca un numero valido*/ 
var edad = prompt("Introduce tu edad");

if(Number(edad) == edad) {
  if(edad >= 18) {
    document.write("*Ya puedes conducir.*");
  }
}

if(Number(edad) == edad) {
  if(edad < 18) {
    document.write("No puedes conducir!...");
  }
}

else {
  alert("Introduce un numero valido.");
}