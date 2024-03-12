let sumaUltimos5 = 0;
let numero;
for (i = 0; i < 10; i++) {
  numero = parseInt(prompt("Ingrese un número:"));
  if (i >= 5) {
    sumaUltimos5 += numero;
  }
  document.write("Número " + (i + 1) + ": " + numero + "<br>");
}

document.write(
  "La suma de los últimos 5 números ingresados es: " + sumaUltimos5 + "<br>"
);
