const url = 'http://localhost:4000/clientes'

export const getClientes = async () => {
    try{
        const respuesta = await fetch(
            url,
            {method: 'GET'}
        )
        const clientes = await respuesta.json()
        console.log(clientes)
        return clientes;
    }catch (error) {
        console.log(error);
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
    }catch (error) {
        console.log(error);
    }
};