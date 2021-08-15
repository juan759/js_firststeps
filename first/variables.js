
//esto es un comentario awevoooooooooooooooo
var ju='este es un string'
console.log(ju)
console.log(typeof(ju))

var hola=5974
console.log(hola)
console.log(typeof(hola))

var nada=null
console.log(nada)
console.log(typeof(nada))

var bol=false
console.log(bol)
console.log(typeof(bol))

//Aquí estamos definiendo una variable, pero como no tiene asignado absolutamente
//ningun valor su tipo es null.Y por lo tanto
var cola
console.log(cola)
console.log(typeof(cola))

hola=hola+4987897
console.log("este es el nuevo valor de hola:"+hola)

/* estoes para comentarios largos
wuuuuasfdas
asdfasfafasfas*/

/*
Operadores matemáticos. +,-,/,*
*/

console.log("Comenzamos con Operadores matemáticos.")
var edadAna,edadMaria,diferenciaEdad;
var sumaEdades,yearAna,yearMaria

edadAna=34
edadMaria=37
yearActual=2020

diferenciaEdad=edadMaria-edadAna
sumaEdades=edadAna+edadMaria
yearAna=yearActual-edadAna
yearMaria=yearActual-edadMaria

console.log("La diferencia de edades es:"+diferenciaEdad)
console.log("La suma de las edades es:"+sumaEdades)
console.log("Año en que nació Ana:"+yearAna)
console.log("Año en que nació Maria:"+yearMaria)

/*
Comenzamos con operadores lógicos,unarios y de asignación
<,>,<=,>=,==,!=
*/
console.log("Operadores lógicos.")

var mayorAna=edadAna>edadMaria
console.log(mayorAna)
console.log(typeof(mayorAna))

var difencia=(edadAna != edadMaria)
console.log(difencia)

console.log("Operadores unarios.")

edadAna++
//El incremento podemos hacerlo dentro de console.log(); pero es importante dónde lo
//ponemos es decir antes o despues de la variable ya que no es lo mismo
//console.log(++edadAna); que console.log(edadAna++);
console.log(edadAna)

//+=,-=,*=,/=,%=
console.log("Operadores de asignación");
var a = 5
var b = 11

var c = a % 25
console.log(c);

a += b
console.log(a);
