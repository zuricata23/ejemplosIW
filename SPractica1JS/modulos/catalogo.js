export function mostrarCatalogo(lista, contenedor){
    let elementoDOM = document.querySelector(contenedor);
    let fila, colClave, colNombre, colDuracion, colPrecio, contClave, contNombre, contDuracion, contPrecio;
    lista.forEach(curso => {
        fila = document.createElement("tr");
        colClave = document.createElement("td");
        colNombre = document.createElement("td");
        colDuracion = document.createElement("td");
        colPrecio = document.createElement("td");

        contClave = document.createTextNode(`${curso.clave}`);
        contNombre = document.createTextNode(`${curso.nombre}`);
        contDuracion = document.createTextNode(`${curso.duracion}`);
        contPrecio = document.createTextNode(`${curso.precio}`);

        colClave.appendChild(contClave);
        colNombre.appendChild(contNombre);
        colDuracion.appendChild(contDuracion);
        colPrecio.appendChild(contPrecio);

        fila.appendChild(colClave);
        fila.appendChild(colNombre);
        fila.appendChild(colDuracion);
        fila.appendChild(colPrecio);

        elementoDOM.appendChild(fila);
    });
}

