//Comenzamos con arreglos.
var array=["Hola","mucho","gusto","sr(a)"]
console.log(array);

arr=new Array("Se","sabe","muy","bien");
console.log(arr[2]);

array[1]="Adios"
console.log(array)

console.log(array.length)

//Recorriendo nuestro arreglo.
/*
for (var i = 0; i < array.length; i++) {
    console.log(array[i])
}

arr.forEach(function(elemento) {
    console.log(elemento)
})


arr.forEach(function(elemento,indice) {
    console.log(elemento,indice)
})
*/

//Agregar al final de un array.
array.push("ud")
console.log(array);
//Agregar al principio de un array.
array.unshift("saludos")
console.log(array);

//Obtener el indice de un elemento dentro de un arreglo.
console.log(arr.indexOf("Se"))

console.log(arr.splice(0,2));
