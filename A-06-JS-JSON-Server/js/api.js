const url = 'http://localhost:4000/clientes'

export async function getClientes() {
    try{
        const respuesta = await fetch(url, {method: 'GET'});
        const clientes = await respuesta.json();
        console.log(clientes)
        return clientes;
    }catch (err) {
        console.log(err);
    }
};

export async function postCliente(cliente) {
    try{
        await fetch(
            url,
            {
                method: 'POST',
                body: JSON.stringify(cliente),
                headers: { 'Content-type': 'application/json' }
            }
        )
        window.location.href = 'index.html'
    }catch (err) {
        console.log(err);
    }
};

export async function deleteCliente(id){
    try{
        await fetch(`${url}/${id}`, {method: 'DELETE'})
        window,location.href = 'index.html'
    }catch (err) {
        console.log(err);
    }
};

export async function getCliente(id) {
    try{
        const resp = await fetch(`${url}/${id}`, { method: 'GET' })
        const cliente = await resp.json()
        return cliente;
    }catch (err) {
        console.log(err);
    }
};

export async function putCliente(cliente) {
    try{
        await fetch(`${url}/${cliente.id}`,
        {
            method: 'PUT',
            body: JSON.stringify(cliente), 
            headers: { 'Content-type': 'application/json' }
        })
        window.location.href = 'index.html'
    }catch (err) {
        console.log(err);
    }
}