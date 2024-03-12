let num= parseInt(prompt("Ingrese un número natural para calcular su factorial:"));
let factorial = 1;
let contador = 1;

for (i = 1; i <= num; i++) {
  factorial = factorial * contador;
  contador++;
}
document.write("El factorial de " + num + " es: " + factorial + "<br>");