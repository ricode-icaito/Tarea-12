/*Script pidiendo numeros hasta que se pulse la opcion de "cancelar" si no introduce un numero decirle por medio de un *alert* que introduzca un numero valido y seguira pidiendo numeros hasta que haga click en "cancelar" y se mostrara por pantalla la suma de los mismos*/
var suma = 0;

do {
    var numero = prompt("Introduce un numero:");
    if (Number(numero) == numero) {
        numero = Number(numero);
        suma = suma + numero;
    }
    
    else {
      if (numero != undefined) {
          alert(numero + " Este no es un numero, da click en aceptar y sigue introduciendo numeros o pulsa en cancelar.");
      }
    }

} while (numero != undefined);
document.write(suma);