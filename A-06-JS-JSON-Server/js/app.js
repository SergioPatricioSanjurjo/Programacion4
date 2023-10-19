import { getClientes, deleteCliente } from "./api.js"; //TODO Fallaba todo por no poner .js


(function (){
    
    document.addEventListener('DOMContentLoaded', mostrarClientes)
    
    const listado = document.querySelector('#tBodyClient');
    listado.addEventListener('click', eliminar)

    async function mostrarClientes(){
        const clientes = await getClientes();
        
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
            
            const tdEliminar = document.createElement('td')
            tdEliminar.innerHTML = `<a href="#" data-cliente="${id}" id="eliminar">Eliminar</a>`
            const tdEditar = document.createElement('td')
            tdEditar.innerHTML = `<a href="./editar-cliente.html?id=${id}">Modificar</a>`

            tr.appendChild(tdApe);
            tr.appendChild(tdNom);
            tr.appendChild(tdDni);
            tr.appendChild(tdFecha);
            tr.appendChild(tdEditar);
            tr.appendChild(tdEliminar);

            listado.appendChild(tr);
        });
    }

    function eliminar(e){
        if(e.target.id==='eliminar'){
            const id = e.target.dataset.cliente
            const ok = confirm(`Desea Eliminar el cliente con id. ${id}`)
            if(ok===true)
            {
                deleteCliente(id)
            }else{
                return; 
            }
        }
    }
})();


