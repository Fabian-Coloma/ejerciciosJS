let nivel = 28; 
let honor = 120; 
let tienePaseVIP = true; 


if (nivel >= 20 && (honor === 100 || tienePaseVIP === true)) {
    alert("¡Acceso CONCEDIDO!");
} else {
    alert("Acceso DENEGADO.");
}