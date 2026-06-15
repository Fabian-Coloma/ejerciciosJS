let vidaHeroe = Number(prompt("Ingresa los puntos de vida del héroe:"));
let ataqueEnemigo = Number(prompt("Ingresa los puntos de ataque del monstruo:"));

vidaHeroe = vidaHeroe - ataqueEnemigo;

if (vidaHeroe < 10) {
    alert("¡Peligro crítico!");
} else {
    alert("Sobreviviste");
}



let nivel = 28; 
let honor = 120; 
let tienePaseVIP = true; 


if (nivel >= 20 && (honor === 100 || tienePaseVIP === true)) {
    alert("¡Acceso CONCEDIDO!");
} else {
    alert("Acceso DENEGADO.");
}



let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

alert("La cuenta A ahora tiene: " + a + " y la cuenta B tiene: " + b);

