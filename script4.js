/*Script para generar una piramide, pidiendo al usuario un numero total de la misma, teniendo un rango especifico del 1 al 50 y si no intorduce un numero decirle  que no introdujo un numero, de igual manera si introduce un numero menor a 1 y mayor a 50 indicarle que ese numero no es valido*/
var numrep = prompt("Introduce numero de repeticiones.");

if (Number(numrep) == numrep) {
  if (numrep > 0 && numrep <= 50) {
    var rep,i;
        
      for (i = 0; i <= numrep; i ++) {
        for (rep = 1; rep <= i; rep ++) {
          document.write(rep);
        }
          document.write("<br>");
      }
  } 
  else {
    alert("El número introducido no es válido.");
  }
} 
else {
  alert("No has introducido un número.");
}