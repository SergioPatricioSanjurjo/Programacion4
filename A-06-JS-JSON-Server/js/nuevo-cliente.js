import { postCliente } from "./api.js";
import { validar } from "./funciones.js";

(function() {
    
    const formulario = document.querySelector('#formulario')
    
    formulario.addEventListener('submit', addCliente)

    async function addCliente(cliente) {
        cliente.preventDefault()
        const cli = crearCliente()
        if( !validar(cli)){
            alert('Todos los campos son Obligatorios')
            return;
        }
        await postCliente(cli);
    }

    const crearCliente = () => {
        const apellido = document.querySelector('#idApellido')
        const nombre = document.querySelector('#idNombre')
        const dni = document.querySelector('#idDni')
        const fechaInicio = document.querySelector('#idFechaInicio')

        const cliente = {
            apellido: apellido.value,
            nombre: nombre.value,
            dni: dni.value,
            fechaInicio: fechaInicio.value
        }
        return cliente;
    }

})();