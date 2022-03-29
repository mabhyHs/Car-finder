//VARIABLES

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para resultados
const resultado= document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Objeto con la busqueda de autos
const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''     
};

//EVENTOS
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos); // carga autos

    //llena las opciones de años
    llenarSelect();
});

//EVENT LISTENER PARA SELECT DE BUSQUEDA
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt( e.target.value );

    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt( e.target.value );

    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

//FUNCIONES

function mostrarAutos(autos){
    
    limpiarHTML();//elimina el html previo

    autos.forEach( auto => {

        const{ marca, modelo, year, puertas, transmision, precio, color } = auto; //destructuring para mayor orden
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}

        `;
        //intertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
};

//Llena el select de años
function llenarSelect(){

    for( let i = max; i >= min; i-- ){//Corre de adelante hacia atrás
        
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega las opciones de año al selet
    }
}

//funcion para filtrar en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor )   //Estos métodos se pueden usar encadenandose

    mostrarAutos(resultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;

    if( marca ){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const { year } = datosBusqueda;

    if( year ){
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;

    if( year ){
        return auto.precio >= minimo;
    }
    return auto;    

}


function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;

    if( maximo ){
        return auto.precio <= maximo;
    }
    return auto;    

}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;

    if( puertas ){
        return auto.puertas === puertas;
    }
    return auto;
}


function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;

    if( transmision ){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const { color } = datosBusqueda;

    if( color ){
        return auto.color === color;
    }
    return auto;
}