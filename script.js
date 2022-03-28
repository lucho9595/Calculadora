const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.number'); //pusimos el All por que necesitamos seleccionar a todos los botones
const botonesOperadores = document.querySelectorAll('.operator');

// ACA REALIZAMOS LA INTERACCION PARA QUE CUANDO APRETAMOS UN BOTON SE PLASME EN EL DISPLAY.

const display  = new Display (displayValorAnterior, displayValorActual);

botonesNumeros.forEach (boton =>{
   boton.addEventListener('click', () => {
display.agregarNumeros(boton.innerHTML);
    });
});

botonesOperadores.forEach (boton =>{
    boton.addEventListener('click', () => 
        display.computar(boton.value));
});