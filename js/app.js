//VARIABLES
const resultado= document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

//EVENTOS
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(); // carga autos
    //llena las opciones de años
    llenarSelect();
});

//FUNCIONES

function mostrarAutos(){
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

//Llena el select de años
function llenarSelect(){

    for( let i = max; i >= min; i-- ){//Corre de adelante hacia atrás
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega las opciones de año al selet
    }

}