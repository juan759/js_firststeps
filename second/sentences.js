//Empezamos if...else

var persona="Rogelio"
var escasado=true

if(!escasado){
    console.log(persona+" Está casado.")
}else {
    console.log(persona+" No está casado.")
}

var persona2="Nicolas"
var edad=32

if(edad<18){
    console.log(persona2+" es menor de edad");
}else if (edad>18 && edad<59) {
    console.log(persona2+" es mayor de edad.");
}else if (edad>60){
    console.log(persona2+" es anciano.");
}

//Empezamos Sentencia switch.

var mes=16458;

switch (mes) {
    case 1:
        console.log("Estamos en Enero.");
        break;
    case 2:
        console.log("Estamos en Febrero.")
        break;
    case 3:
        console.log("Estamos en Marzo.")
        break;
    default:
        console.log("Estamos en nose");
        break;
}

//Sentencia for.
for (var i = 0; i <=50; i++) {
    console.log(i);
}

//Sentencias while y do-while.
var i=1;
while (i<=50) {
    console.log(i);
    i++
}

do {
    console.log("hola")
} while (i<=1);
