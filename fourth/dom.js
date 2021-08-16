console.log(document.title);
//Podemos modificar las propiedades del dom con:
//document.title="Nuevo nombre"

console.log(document.body);

//h1 es un arreglo.
var h1 = document.getElementsByTagName("h1");
//Así podemos modificar algún elemento de nuestro .html, como a cualquier
//arreglo.
//h1[0]="Prueba"
console.log(h1);

primero=document.getElementById('hola23')
console.log(primero);
//Agregamos eventos al boton.
primero.addEventListener("click",mensaje);

function mensaje(){
    alert('Hola mundo')
}
