//Es la encargada de controlar la calculadora
// Y va a ser la clase la cual interactua con nuestros botones.

class Display {
    constructor(displayValorAnterior, displayValorActual){
this.displayValorAnterior = displayValorAnterior,
this.displayValorActual = displayValorActual,
this.calculadora = new Calculadora(),
this.tipoOperador = undefined,
this.valorActual = '',
this.valorAnterior = '',
this.signos = {
    sumar: '+',
    dividir: '%',
    multiplicar: 'x',
    restar: '-',
}

    }

    //creamos el metodo borrar

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0, -1); //lo que hacemos es que el valorActual borre con .slice (el ultimo valor)
        this.imprimirValores();
    }

    //creamos el metodo borrarTodo

    borrarTodo(){
        this.valorActual = '',
        this.valorAnterior = '',
        this.tipoOperador = undefined,
        this.imprimirValores()
    }

computar(tipo){
    this.tipoOperador !== 'igual' && this.calcular();
    this.tipoOperador = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual= '';
    this.imprimirValores();
}

    
    //Ahora tenemos que agregar numeros a nuestra calculadora

    agregarNumeros(number){
        if (number === '.' && this.valorActual.includes('.')) return //si el punto esta incluido en el numero y en el valor actual
                                                                     //unicamente podes poner un punto ( . )
        this.valorActual = this.valorActual.toString() + number.toString();
        this.imprimirValores();
    }

    //tenemos que hacer que los imprima

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperador] || ''}`;
    }

    //lo que hace es tomar los valores que tiene cargador el display y darselos a la calculadora asi realiza el calculo
    calcular(){
        const valorActual = parseFloat(this.valorActual); // asi podemos concatenarlos como numeros
        const valorAnterior = parseFloat(this.valorAnterior); // asi podemos concatenarlos como numeros

        if(isNaN(valorActual) || isNaN(valorAnterior)) return //quiere decir si tanto el valorActual como el valorAnterior es NaN (not a number) o sea no hay numero

         this.valorActual = this.calculadora[this.tipoOperador](valorActual, valorAnterior)

    }
}