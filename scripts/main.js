let btnMagnitudFisica = document.querySelectorAll('.btn-magnitud-fisica')
let inputUnidadOrigen = document.getElementById('input-unidad-origen');
let btnConvetir = document.getElementById('convertir');
let unidadOrigenListaDesplegable = document.getElementById('unidad-origen-opciones');
let unidadDestinoListaDesplegable = document.getElementById('unidad-destino-opciones');
let mostrarResultado = document.getElementById('resultado-unidad-destino');

btnConvetir.addEventListener('click', convertirUnidades);

btnMagnitudFisica.forEach(function(e){
    e.addEventListener('click', function () {
        obtenerMagnitudFisica(this.value);
    })
})

function convertirStringAInt() {
    return parseInt(inputUnidadOrigen.value);
}
function obtenerMagnitudFisica() {
    //Obtniendo valor de la lista desplegable sin eventos
    return magnitudFisicaListaDesplegable.options[magnitudFisicaListaDesplegable.selectedIndex].value;
}
function obtenerUnidadOrigen(){
    return unidadOrigenListaDesplegable.options[unidadOrigenListaDesplegable.selectedIndex].value;
}
function obtenerUnidadDestino(){
    return unidadDestinoListaDesplegable.options[unidadDestinoListaDesplegable.selectedIndex].value;
}

function obtenerMagnitudFisica(value) {
    console.log(value);
    return value;
}

function convertirUnidades() {
    btnMagnitudFisica.forEach((e)=>{
        console.log(e.value);
        
    });
    
}