let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

alert("La cuenta A ahora tiene: " + a + " y la cuenta B tiene: " + b);




let nivel = 28; 
let honor = 120; 
let tienePaseVIP = true; 


if (nivel >= 20 && (honor === 100 || tienePaseVIP === true)) {
    alert("¡Acceso CONCEDIDO!");
} else {
    alert("Acceso DENEGADO.");
}