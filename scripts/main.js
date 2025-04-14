import { categorias } from "./categorias.js";
import { convertir } from "./conversiones.js";
let selectMagnitudFisica = document.getElementById('magnitud-fisica-select');
let btnMagnitudFisica = document.querySelectorAll('.btn-magnitud-fisica');
let inputUnidadOrigen = document.getElementById('input-unidad-origen');
let btnConvetir = document.getElementById('convertir');
let unidadOrigenListaDesplegable = document.getElementById('unidad-origen-opciones');
let unidadDestinoListaDesplegable = document.getElementById('unidad-destino-opciones');
let mostrarResultado = document.getElementById('resultado-unidad-destino');
let magnitud = 'Longitud';

btnConvetir.addEventListener('click', convertirUnidades);
selectMagnitudFisica.addEventListener('change', function() {
    magnitud = this.value;
    cambiarMagnitudFisica(this.value);
})

//Cambiar valores de la lista desplegable, según la magnitud seleccionada en los botones
btnMagnitudFisica.forEach(function(e){
    e.addEventListener('click', function () {
        cambiarMagnitudFisica(this.value);
        magnitud = this.value;
    })
})

function convertirStringAInt() {
    return parseInt(inputUnidadOrigen.value);
}
function obtenerUnidadOrigen(){
    //Forma de obtener el valor de options sin eventos, con eventos es change
    return unidadOrigenListaDesplegable.options[unidadOrigenListaDesplegable.selectedIndex].value;
}
function obtenerUnidadDestino(){
    return unidadDestinoListaDesplegable.options[unidadDestinoListaDesplegable.selectedIndex].value;
}
function convertirUnidades() {
    let unidadInput = convertirStringAInt();
    let unidadOrigen = obtenerUnidadOrigen();
    let unidadDestino = obtenerUnidadDestino();

    if(unidadOrigen === unidadDestino){
        return alert('Las unidades deben de ser distintas!');
    }
    if (unidadInput === "") {
        return alert('Debe introducir el valor a convertir!');
    }
    
    
    let resultado = convertir(magnitud,unidadOrigen, unidadDestino, unidadInput);
    mostrarResultado.textContent = resultado;

}

function cambiarMagnitudFisica(magnitudFisica) {
    limpiandoOpciones();
    /*Hay diversas formas de acceder a las propiedades de los objetos, una es a través de []
        persona[edad] === persona.edad
    Al acceder de esa forma a las propiedades de la magnitud fisica, tenemos acceso al array de unidades, las recorremos
    con forEach  y según sea el cambio se cambian las opciones del select
    */
    
    categorias[magnitudFisica].forEach(function(e){
        unidadOrigenListaDesplegable.appendChild(nuevasOpciones(e));
        unidadDestinoListaDesplegable.appendChild(nuevasOpciones(e));
    });
}
function limpiandoOpciones() {
    // Reemplaza el contenido de unidadOrigenListaDesplegable con una cadena vacía
    unidadOrigenListaDesplegable.innerHTML = '';
    unidadDestinoListaDesplegable.innerHTML = '';
    mostrarResultado.textContent = 0;
    inputUnidadOrigen.value = '';
}
function nuevasOpciones(unidad) {
    const opcion = document.createElement('option');
    opcion.textContent = unidad;
    opcion.value = unidad;
    return opcion;
}