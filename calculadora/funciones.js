const botonNumeros = document.getElementsByName("data-number");
const botonOperacion = document.getElementsByName("opcode");
const botonEdicion = document.getElementsByName("editcode");
const botonRes = document.getElementsByName("boteq")[0]
const botonAns= document.getElementsByName("previous")[0]
const botonClear = document.getElementsByName("clear")[0]
result = document.getElementById('result')
opActual = '';
opAnterior = '';
operacion = undefined;

botonNumeros.forEach(function(boton) {
    boton.addEventListener('click',function(){
            agregarNumero(boton.innerText)
    })
})

botonOperacion.forEach(function(boton){
    boton.addEventListener('click',function(){
        seleccionarOp(boton.innerText)
    })
})

botonRes.addEventListener('click',function(){
    calcular()
    actualizarDisp()
})

botonEdicion.forEach(function(boton){
    boton.addEventListener('click',function(){
        edita(boton.innerText)
    })
})

botonAns.addEventListener('click',function(){
    escribeAns()
})

botonClear.addEventListener('click',function(){
    clear()
    actualizarDisp()
})

function seleccionarOp(op) {
    if(opActual === ''){
        return;
    }
    if(opAnterior != ''){
        calcular()
    }
    operacion = op.toString();
    opAnterior = opActual;
    opActual = '';
}


function agregarNumero(num) {
    opActual = opActual.toString() + num.toString()
    actualizarDisp()
}

function calcular() {
    var calculo;
    const anterior = parseFloat(opAnterior)
    const actual = parseFloat(opActual)
    if(isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior+actual;
            break;
        case '-':
            calculo = anterior-actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case'/':
            calculo = anterior / actual;
            break
        default:
            return;
    }
    opActual = calculo;
    operacion = undefined;
    opAnterior = ''
}
function actualizarDisp() {
    result.value = opActual;
}

/*
function edita(op){
    if(opActual === ''){
        return;
    }else{
        switch (opActual){
            case '.':
            operacion = opActual+'.'
            case 'EXP':
            opActual = 'E'
        }
    }
}*/

function clear() {
    opActual = '';
    opAnterior = '';
    operacion = undefined;

}
