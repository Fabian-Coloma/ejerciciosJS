let vidaHeroe = Number(prompt("Ingresa los puntos de vida del héroe:"));
let ataqueEnemigo = Number(prompt("Ingresa los puntos de ataque del monstruo:"));

vidaHeroe = vidaHeroe - ataqueEnemigo;

if (vidaHeroe < 10) {
    alert("¡Peligro crítico!");
} else {
    alert("Sobreviviste");
}