/**
 * Una promesa en javascript es un concepto que permite resolver los problemas de peticiones asinconas según se acepte o no la petición.
 * Una promesa puede tener uno de los siguientes tres estados: pendiete, aceptado o cumplida, rechazada.
 * Las promesas se crean por una rutina que recibe la petición y se consumen por una rutina que
 * realiza la petición.
 */

/** Ejemplo de lectura de una archivo mediante una petición asíncrona por medio de fetch(), 
 *  en este ejemplo se consume una promesa.
*/

// función que procesa la petición de recuperar un archivo de la URL especificada
function leerArchivo(url){
    fetch(url)
    // then permite consumir una promesa cuando se cumple o tuvo éxito la petición
    .then(response=>{ // función flecha que especifica la funcionalidad cuando se cumple la promesa.
       console.log("se retorna la promesa ...");
       return response.text(); // se devuelve la promesa
    })
    .then(data=>console.log(data)) // si se cumple la promesa se retorna el contenido del documento
    .catch(error => console.log("Promesa rechazada ...")) // se captura la excepción si se rechaza la petición
    .finally(()=>console.log("Terminado")) // función que se ejecuta independientemente si se cumple o no una promesa.
}

/**
 * Ejemplo que crea una promesa
 */
const tirarDado = (numIteraciones) => new Promise((aceptada, rechazada) => {
    const numeros = [];
    for(let i=0; i<numIteraciones; i++){
        const numero = 1 + Math.floor(Math.random()*6);
        numeros.push(numero);
        if (numero === 6){
            rechazada ({
              error:true,
              tiradas:numeros,
              mensaje: "Se ha sacado un 6 ..."  
            });
            break;
        }
    }
    aceptada ({
       error:false,
       valor:numeros 
    });
});

function ejecutarTirarDado (iteraciones){
  tirarDado(iteraciones)
    .then(resultado => console.log("Tiradas correctas: ", resultado.valor))
    .catch(error => console.error("Error al tirar dado: ", error.mensaje, error.tiradas))    
}