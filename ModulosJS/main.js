import {mostrarCursos, buscarCurso, mostrarCursosSel, calcularTotalPago} from './gestionCursos.js'

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
     }         
] 

let cursosSeleccionados = [];
let usuario = {
    nombre: "Usuario 1",
    correo:"usuario1@gmail.com",
    deuda: 0
}

window.onload = init();

function init(){
    
    ejecutar();

    /*
        Si se desea inciar la ejecución o ejecutar funciones a través
        de elementos HTML se debe se registrar el evento click 
        
        let elemento = document.getElementById('elemento');
        elemento.addEventListener('click', función_a_ejecutar);*/

}


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
   
   // Se invoca mostraCursos de gestionarCursos.js
   mostrarCursos(cursos);
   // Se selecciona dos cursos del listado 
   // y se guarda en el array de cursos
   // seleccionados
   curso = buscarCurso(cursos, "C1");
   guardarCursoSel(curso);
   curso = buscarCurso(cursos, "C3");
   guardarCursoSel(curso);
   // se Invoca mostrarCursosSel de gestionarCursos.js
   mostrarCursosSel(cursosSeleccionados);
   // Se invoca finalizar compra de gestionarCursos.js
   finalizarCompra();

   return;
}