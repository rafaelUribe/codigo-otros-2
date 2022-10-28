let formulario = document.querySelector("form");

// el codigo genera tarjetas de invitados a partir de un formulario
// con inputs y select

formulario.onsubmit = function(e) {
    // se complemente a preventDefault
    e.preventDefault();

    let name = formulario.elements[0];
    // se asigno un nuevo nombre de variable
    let age = formulario.elements[1];
    let nationality = formulario.elements[2];

    let nombre = name.value;
    let edad = age.value;

    let i = nationality.selectedIndex;
    let nacionalidad = nationality.options[i].value;

    if (nombre.length === 0) {
        n.classList.add("error");
    }
    if (edad < 18 || edad > 120) {
        age.classList.add("error");
    }

    if (nombre.length > 0 && edad > 18 && edad < 120) {
        agregarInvitado(nombre, edad, nacionalidad);
    }
};

// let botonBorrar = document.createElement("button");
// botonBorrar.textContent = "Eliminar invitado";
// botonBorrar.id = "boton-borrar";
// let corteLinea = document.createElement("br");
// document.body.appendChild(corteLinea);
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  
    if (nacionalidad === "ar") {
        nacionalidad = "Argentina";
    } else if (nacionalidad === "mx") {
        nacionalidad = "Mexicana";
    } else if (nacionalidad === "vnzl") {
        nacionalidad = "Venezolana";
    } else if (nacionalidad === "per") {
        nacionalidad = "Peruana";
    }

    let lista = document.getElementById("lista-de-invitados");

    let elementoLista = document.createElement("div");
    // se cambia added por add
    elementoLista.classList.add("elemento-lista");
    lista.appendChild(elementoLista);

    // let spanNombre = document.createElement("span");
    // let inputNombre = document.createElement("input");
    // let espacio = document.createElement("br");
    // spanNombre.textContent = "Nombre: ";
    // inputNombre.value = nombre;
    // elementoLista.appendChild(spanNombre);
    // elementoLista.appendChild(inputNombre);
    // elementoLista.appendChild(espacio);

    //Se borra lo que esta fuera de la funcion

    function crearElemento(descripcion, valor) {
        let spanNombre = document.createElement("span");
        let inputNombre = document.createElement("input");
        let espacio = document.createElement("br");
        spanNombre.textContent = descripcion + ": ";
        inputNombre.value = valor;
        elementoLista.appendChild(spanNombre);
        elementoLista.appendChild(inputNombre);
        elementoLista.appendChild(espacio);
    }

    crearElemento("Nombre", nombre);
    crearElemento("Edad", edad);
    crearElemento("Nacionalidad", nacionalidad);

    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";
    botonBorrar.id = "boton-borrar";
    let corteLinea = document.createElement("br");
    elementoLista.appendChild(corteLinea);
    elementoLista.appendChild(botonBorrar);

    botonBorrar.onclick = function() {
        // this.parentNode.style.display = 'none';
        botonBorrar.parentNode.remove();
    };
}