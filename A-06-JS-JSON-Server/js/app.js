import { getClientes } from "./api";


(function (){
    const listado = document.querySelector('#tBodyClient');
    document.addEventListener('DOMContentLoaded', mostrarClientes)

    async function mostrarClientes(){
        const clientes = await getClientes()
        clientes.forEach(cliente => {
            const {apellido, nombre, dni, fechaInicio, id} = cliente;
            
            const tr = document.createElement('tr');
            
            const tdApe = document.createElement('td');
            tdApe.textContent = apellido;
            const tdNom = document.createElement('td');
            tdNom.textContent = nombre;
            const tdDni = document.createElement('td');
            tdDni.textContent = dni;
            const tdFecha = document.createElement('td');
            tdFecha.textContent = fechaInicio;
            
            const tdEditar = document.createElement('td');
            tdEditar.innerHTML = `<a href="#" data-cliente="${id}" id="eliminar">Modificar</a>`
            const tdEliminar = document.createElement('td');
            tdEliminar.innerHTML = `<a href="./editar-cliente.html">Eliminar</a>`

            tr.appendChild(tdApe);
            tr.appendChild(tdNom);
            tr.appendChild(tdDni);
            tr.appendChild(tdFecha);
            tr.appendChild(tdEditar);
            tr.appendChild(tdEliminar);

            listado.appendChild(tr);
        });
    }
})();


