import {mostrarCatalogo} from './modulos/catalogo.js'
/*import {mostrarCursosSel, calcularTotalPago, eliminarItem} from './modulos/carrito.js'*/

/**
 * Array de elementos de la lista a ofertar
 */
let cursos = [
    {
     nombre: "HTML",
     clave: "C1",
     duracion: "10 hrs",
     precio: 800
    },
    {
     nombre: "Introducción a CSS",
     clave: "C2", 
     duracion: "12 hrs",
     precio: 800
     },
    {
     nombre: "CSS avanzado",
     clave: "C3",
     duracion: "20 hrs",
     precio: 1200
     },
     {
      nombre: "Introducción a Javasript",
      clave: "C4",
      duracion: "10 hrs",
      precio: 800
     },        
     {
        nombre: "Javasript",
        clave: "C5",
        duracion: "10 hrs",
        precio: 800
       }          
] 

let cursosSeleccionados = [];

let usuario = {
    nombre: "Usuario 1",
    correo:"usuario1@gmail.com",
    deuda: 0
}

window.onload = ejecutar();

function guardarCursoSel(curso){
   if (curso != 0) cursosSeleccionados.push(curso);
   else console.log('El curso no se encuentra ofertado');

   return;
}

function finalizarCompra(){
    usuario.deuda = calcularTotalPago(cursosSeleccionados, usuario);
    console.log( `${usuario.nombre} tu total a pagar es: $ ${usuario.deuda}.00`);

    cursosSeleccionados=[];
    usuario.deuda = 0;

    return;
}

function ejecutar(){
   let curso;     
   mostrarCatalogo(cursos,"#catalogo");

}