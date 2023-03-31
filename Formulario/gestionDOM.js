// indicador de validación de la CURP
let curpValido = false;
let nombreValido = false;

/* Función que genera un color RGB */
function colorAleatorio() {
   const r = Math.ceil(Math.random() * 255);
   const g = Math.ceil(Math.random() * 255);
   const b = Math.ceil(Math.random() * 255);
    
   return `rgb(${r}, ${g}, ${b})`;
}
    

 //Función que valida el dígito verificador de la CURP
 function validaDigitoVerificador(curpDigito) {
  var digitos = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
    lngSuma = 0.0,
    lngDigito = 0.0;
  for (var i = 0; i < 17; i++)
    lngSuma = lngSuma + digitos.indexOf(curpDigito.charAt(i)) * (18 - i);
  lngDigito = 10 - lngSuma % 10;
  if (lngDigito == 10) return 0;
  return lngDigito;
}

/*
   Función que valida el formato de la CURP
   incluyendo digito verificador 
*/
function validaFormatoCurp(curp) {
  let correcto;
  let re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0\d|1[0-2])(?:[0-2]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
  correcto = curp.match(re);

  if (!correcto)
    return false; 

  if (correcto[2] != validaDigitoVerificador(correcto[1]))
    return false;

  return true;
}


 // funcion handler del evento oninput
 function handlerInputCurp(curp) {
  const inputcurp = document.querySelector("#curp");
  let curpU = curp.value.toUpperCase();

  if (validaFormatoCurp(curpU)) {
    inputcurp.style.border = "3px solid green";
    curpValido = true;
  } else {
    inputcurp.style.border = "3px solid red";
    curpValido = false;
  }
}

function validaFormatoNombre(nombre) {
  let correcto;
  let re = /^[a-zA-Z]{3,100}$/;
  correcto = nombre.match(re);

  if (!correcto)
    return false; 
  
  return true;
}


function handlerInputNombre(nombre) {
  const inputnombre = document.querySelector("#nombre");
 
  if (validaFormatoNombre(nombre.value)) {
    inputnombre.style.border = "3px solid green";
    nombreValido = true;
  } else {
    inputnombre.style.border = "3px solid red";
    nombreValido = false;
  }
}


window.addEventListener("load", function () {
  /*
      Bloque de código que cambia de color el
      header y el formulario
  */
  const header = document.querySelector("#header");
  header.addEventListener("click", function (evento) {

    let rgbc = colorAleatorio();
    this.style.boxShadow = `10px 5px 20px ${rgbc}`;
    formulario.style.backgroundColor = `${rgbc}`;

  })

  const formulario = document.querySelector("#form");
  
  /*
     Bloque de código que envía los datos del 
     formulario si CURP es valido
  */
  formulario.addEventListener("submit", function (e) {
      e = e || window.event;
      if(!curpValido || !nombreValido)
       
        e.preventDefault();
      
  })
})
