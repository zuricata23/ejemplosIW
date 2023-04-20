// Función flecha que muestra el contenido del Array cursos declarado en el archivo cursos.js
const mostrarCursos = (cursos) =>{
    console.log ("Listado de cursos");  
    console.log ("CLAVE       CURSO             PRECIO"); 
    console.log(" ");
  
    // Recorrido del Array de objetos con for, sintaxis para Array
    for(let curso of cursos){
      console.log (`${curso.clave} - ${curso.nombre} duración ${curso.duracion} --> $ ${curso.precio}.00`);
    }
}
  
/* 
   Función flecha que permite seleccionar un curso del listado ofertado. 
   Parámetro de entrada: Clave de un curso del listado. 
   Si no se proporciona la clave del curso indica mensaje de error
   Si se encuentra el curso se añade al array de cursos seleccionados
*/
const buscarCurso = (cursos, claveCurso) => {
    let curso = cursos.find(curso => curso.clave === claveCurso);
    if (!curso) return 0 // no se encontro
          
    return curso;
}
  
// Función que muestra en consola en formato de Array los cursos seleccioandos
const mostrarCursosSel = cursosSel => console.log(cursosSel);
  
const calcularTotalPago = cursosSel => {
      let precioT = 0;
      cursosSel.forEach(curso => precioT += curso.precio);
      
      return precioT;
  }
  
 
  export {mostrarCursos, buscarCurso, mostrarCursosSel, calcularTotalPago};