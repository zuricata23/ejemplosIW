/*JS ES6
 - variables y constantes
 - debilmente tipado
 - basado en objetos
 - orientado a objetos
 - funciones
   - función anónima
   - funciones declaradas (con nombre)
 - Tipos de datos
    number
    string
    boolean
    array
    object 
      {
         atributo:valor;

      }
    undefined
    null


*/

// ejemplo de declaracion de variable
let numero;
numero = 250;
console.log(typeof(numero));

function colorAleatorio(){
  const r=Math.ceil(Math.random() * 255);
  const g=Math.ceil(Math.random() * 255);
  const b=Math.ceil(Math.random() * 255);
  
  return `rgb(${r}, ${g}, ${b})`;
}

const btn = document.querySelector("#header");
btn.addEventListener("click", function(evento){
    const formulario = document.querySelector("#form");
    let rgbc = colorAleatorio();
    this.style.boxShadow = `10px 5px 20px ${rgbc}`;
    formulario.style.backgroundColor= `${rgbc}`;  

})

