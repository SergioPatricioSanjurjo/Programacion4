console.log('---------CALLBACK-fUNCTIONS--------------------------------------');
const empleados = [{id: 1, name: 'Maria'},{id: 2, name: 'Ana'},{id: 3, name: 'Roberto'},{id: 4, name: 'Carlos'}];
const salarios = [{id: 1, salario: 2000},{id: 2, salario: 2500},{id: 3, salario: 3000},{id: 4, salario: 4000}];
const getEmpleadoById = (id, callback) => {
    const empRes = empleados.find((item) => item.id == id);
    (empRes)
        ? callback(null, empRes)
        : callback('El empleado con la ID ' + id + ' no Existe..') //* 3nario
};
getEmpleadoById(10, (err, empleado) => {
    if(err){
        console.log('ERROR!!!');
        return console.log(err);
    }
    console.log(empleado);
});
const getSalarioById = (id, callback) => {
    const salRes = salarios.find((item) => item.id == id);
    if(salRes){
        callback(null, salRes);
    }else{
        callback('El empleado con la ID ' + id + ' no Existe..');
    }
};
getSalarioById(10, (err, emplSal) => {
    if(err){
        console.log('ERROR!!!');
        return console.log(err);
    }
    console.log(emplSal.salario);

});
let idEmpSal = 1;
getEmpleadoById(idEmpSal, (err, empleado) => {
    if(err){
        console.log('ERROR!!!');
        return console.log(err);
    }
    console.log('Empleado: ');
    console.log(empleado);
    getSalarioById(idEmpSal, (err, emplSal) => {
        if(err){
            console.log('ERROR!!!');
            return console.log(err);
        }
        console.log('Salario: ');
        console.log(emplSal.salario);
    
    })
});

//! --------------------Trabajo practico nº 3 – Callback--------------------------------

//!----------Ejercicio 1: Función Callback Básica----------
//?Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una 
//?función de callback. La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la función de callback.
console.log('---------01-----------------------------------------------------');

//!----------Ejercicio 2: Callback con Retorno de Datos---
//?Crea una función llamada `sumarAsync` que acepte dos números y una función de callback. 
//?Esta función debe sumar los números y luego llamar a la función de callback con el resultado.
console.log('---------02-----------------------------------------------------');

//!----------Ejercicio 3: Uso de setTimeout---------------
//?Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un número de milisegundos.
//?La función debe llamar al callback después de la cantidad especificada de tiempo utilizando `setTimeout`.
console.log('---------03-----------------------------------------------------');

//!----------Ejercicio 4: Callback Anidado---------------
//?Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener datos de usuario.
//?Esta función debe aceptar un ID de usuario y una función de callback. Luego, dentro de la función, debes simular 
//?una solicitud a una API y, cuando se complete, llamar a la función de callback con los datos del usuario.
console.log('---------04-----------------------------------------------------');

//!----------Ejercicio 5: Promesas y Callbacks-----------
//?Modifica el ejercicio 4 para que en lugar de utilizar callbacks, utilice promesas para manejar la solicitud de datos de usuario.
console.log('---------05-----------------------------------------------------');