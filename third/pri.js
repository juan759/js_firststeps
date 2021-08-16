//Empezamos con funciones.
function hola() {
    console.log("Hola mundo");
}

hola()

function imprime(msj) {
    return msj+"tu eres muy buena persona.";
}

feli=imprime("Hola ")
console.log(feli);


function suma(m,n,o,p,t){
    return m+n+o+p+t
}

s=suma(1,23,4,5,6)
console.log(s);

//Creemos valores opcionales.
//C es valor opcional.
function op(a,b,c=38){
    return (a+b)*c
}

sdd=op(2342432,2432342)
console.log(sdd);



//Funciones recursivas.
function rec(rj){
    if (rj==0 || rj==1) {
        return 1;
    } else {
        return (rj* rec(rj-1))
    }
    rj*rec(rj-1)
}

sdd=rec(4)
console.log(sdd);

//Alternativamente podríamos hacerlo de la forma:
var factorial=function(rj){
    if (rj==0 || rj==1) {
        return 1;
    } else {
        return (rj* rec(rj-1))
    }
    rj*rec(rj-1)
}
//Obtenemos exactamente lo mismo que en la otra función.
console.log(factorial(4));

console.log(parseInt(45));
