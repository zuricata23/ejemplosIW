/*
   JSON: JavaScript Object Notation

   1. Formato de datos, similar a un archivo de texto
   2. Sintaxis parecida a objetos literales Javascript
   3. Objeto JSON vs Objeto Javascript
    
   {
     "boleta":"2018064025",
     "nombre":"Juan Manuel Hernández"
     "semestre":5
     "promedio":8
   }

   La principal diferencia entre un objeto JSON y un objeto JavaScript 
   normal -también llamado objeto literal - se reduce a las comillas. 
   Todas las claves y valores de tipo cadena de un objeto JSON tienen que 
   ir entre comillas dobles (").

   Es decir, en formato Javascript el ejemplo de objeto queda como:

   const alumno = {
     boleta:'2018064025',
     nombre:'Juan Manuel Hernández'
     semestre:5
     promedio:8
   }

   4. Arreglos JSON vs arreglos JavaScript
   
   Los arreglos JSON funcionan prácticamente igual que los arreglos en 
   JavaScript, y pueden contener cadenas, booleanos, números y otros 
   objetos JSON.

   Ejemplo 1:
   
   [
     {
        "boleta":"2018064025",
        "nombre":"Juan Manuel Hernández"
        "semestre":5
        "promedio":8
     },
     {
        "boleta":"2019064225",
        "nombre":"Oscar Miguel Martínez"
        "semestre":4
        "promedio":7.5
     }
   ]

   Ejemplo 2:

     {
        "boleta":"2018064025",
        "nombre":"Juan Manuel Hernández"
        "semestre":5
        "materias":[{"claveMat":"T101", "nombre":"Álgebra", "calif":8},
                    {"claveMat":"T201", "nombre":"Programación", "calif":9},
                    {"claveMat":"T202", "nombre":"Ética", "calif":8}]
     }

*/

fetch('alumnos.json')
  .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
  .then(data => {
    let bloque = document.querySelector('#datosAlumnos');
    let fila, colBoleta, colNombre, colSemestre, colPromedio, contBoleta, contNombre, contSemestre, contPromedio;
    
    bloque.style.display = "block";
    

    data.forEach(alumno => {
        fila = document.createElement("tr");
        colBoleta = document.createElement("td");
        colNombre = document.createElement("td");
        colSemestre = document.createElement("td");
        colPromedio = document.createElement("td");

        contBoleta = document.createTextNode(`${alumno.boleta}`);
        contNombre = document.createTextNode(`${alumno.nombre}`);
        contSemestre = document.createTextNode(`${alumno.semestre}`);
        contPromedio = document.createTextNode(`${alumno.promedio}`);
        colBoleta.appendChild(contBoleta);
        colNombre.appendChild(contNombre);
        colSemestre.appendChild(contSemestre);
        colPromedio.appendChild(contPromedio);
        
        fila.appendChild(colBoleta);
        fila.appendChild(colNombre);
        fila.appendChild(colSemestre);
        fila.appendChild(colPromedio);

        bloque.appendChild(fila);
        
    });
    


  })
  