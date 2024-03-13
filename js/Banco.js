let sumaSaldosAcreedores = 0;
let numeroCuenta = 0,
  nombreCliente,
  saldoActual,
  estadoCuenta;

while (numeroCuenta >= 0) {
  numeroCuenta = parseInt(
    prompt(
      "Ingrese el número de cuenta (ingrese un valor negativo para finalizar:"
    )
  );
  if (numeroCuenta < 0) break;
  nombreCliente = prompt("Ingrese el nombre del cliente:");
  saldoActual = parseInt(prompt("Ingrese el saldo actual:"));

  if (saldoActual > 0) {
    estadoCuenta = "Acreedor";
    sumaSaldosAcreedores += saldoActual;
  } else if (saldoActual < 0) {
    estadoCuenta = "Deudor";
  } else {
    estadoCuenta = "Nulo";
  }

  document.write("Número de cuenta: " + numeroCuenta);
  document.write("Nombre del cliente: " + nombreCliente);
  document.write("Estado de la cuenta: " + estadoCuenta);
}

document.write(
  "La suma total de los saldos acreedores es: " + sumaSaldosAcreedores
);
