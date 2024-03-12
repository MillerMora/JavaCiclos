let num = parseInt(prompt("Ingrese un número del 1 al 10:"));

document.write("La tabla de multiplicación del " + num + " es:<br>");

for (let i = 1; i <= 12; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
