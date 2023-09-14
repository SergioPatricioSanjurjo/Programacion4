//! --------------------Callback-Functions---------------------------------------------------------------------------------------
console.log('---------CALLBACK-FUNCTIONS--------------------------------------');
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

//! --------------------Trabajo practico nº 3 – Callback---------------------------------------------------------

//!----------------Ejercicio 1: Función Callback Básica----------------------------
//?Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una función de callback.
//?La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la función de callback.
console.log('---------01-----------------------------------------------------');
const mostrarMensaje = (msg, callback) => {
    console.log(msg);
    if(msg != ''){
        callback(null);
    }else
        callback('No hay un mensaje para mostrar')
};
mostrarMensaje('', (err) => {
    if(err){
        console.log('ERROR!!!');
        return console.log(err);
    }
});
mostrarMensaje('Hola', (err) => {
    if(err){
        console.log('ERROR!!!');
        return console.log(err);
    }
});

//!----------------Ejercicio 2: Callback con Retorno de Datos----------------------
//?Crea una función llamada `sumarAsync` que acepte dos números y una función de callback. 
//?Esta función debe sumar los números y luego llamar a la función de callback con el resultado.
console.log('---------02-----------------------------------------------------');
function sumarAsync(num1, num2, callback) {
    let suma = 0;
    suma = num1 + num2;
    if(suma >=0){
        callback(null, suma);
    }else{
        callback('Se sumaron negativos');
    }
};
sumarAsync(-9, 4, (err, suma) => {
    if(err){
        console.log('ERROR!!!');
        return console.log(err);
    }
    console.log('SUMA = ' + suma);
});
sumarAsync(4, 9, (err, suma) => {
    if(err){
        console.log('ERROR!!!');
        return console.log(err);
    }
    console.log('SUMA = ' + suma);
});

//!----------------Ejercicio 3: Uso de setTimeout----------------------------------
//?Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un número de milisegundos.
//?La función debe llamar al callback después de la cantidad especificada de tiempo utilizando `setTimeout`.
console.log('---------03-----------------------------------------------------');
function retrasarEjecucion(timeMs, callback) {
    setTimeout(callback, timeMs);
    console.log('La funcion se ejecutara despues de ' + timeMs + ' milisegundos');
};
retrasarEjecucion(5000, () => {
    console.log('---------|03|-----------------------------------------------');
    console.log('Funcion con retraso del punto 03');
});

//!----------------Ejercicio 4: Callback Anidado-----------------------------------
//?Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener datos de usuario.
//?Esta función debe aceptar un ID de usuario y una función de callback. Luego, dentro de la función, debes simular 
//?una solicitud a una API y, cuando se complete, llamar a la función de callback con los datos del usuario.
console.log('---------04-----------------------------------------------------');
function obtenerDatosUsuario(unaId, callback) {
    setTimeout(callback, 5000);
};

//!----------------Ejercicio 5: Promesas y Callbacks-------------------------------
//?Modifica el ejercicio 4 para que en lugar de utilizar callbacks, 
//?utilice promesas para manejar la solicitud de datos de usuario.
console.log('---------05-----------------------------------------------------');





//TODO PASAR COMO  CABECERA DE PROMISE
console.log('------------------------PROMISE------------------------------------------');
//!------------------PROMISE------------------------------------------------------------------
const calcularDescuento = new Promise((resolve, reject) =>{             //!-------------------
    const descuento = true;                                             //!-------------------
    if(descuento){                                                      //!-------------------
        resolve('Descuento Realizado');                                 //!-------------------
    }else{                                                              //!-------------------
        reject('ERROR!!!   el descuento no poede ser aplicado');        //!-------------------
    }                                                                   //!-------------------
});                                                                     //!-------------------
//console.log(calcularDescuento);                                       //!-------------------
calcularDescuento                                                       //!-------------------
    .then((data) => {console.log(data)})                                //!-------------------
    .catch((err) => {console.log(err);});                               //!-------------------                                           
//!-------------------------------------------------------------------------------------------
console.log('------------------------EJEMPLO------------------------------------------');
const estudiantes = [
    {id: 1, nombre:'Maria'},
    {id: 2, nombre:'Ana'},
    {id: 3, nombre:'Marcelo'},
    {id: 4, nombre:'Adrian'}
];
const notas = [
    {id: 1, nota:10},
    {id: 2, nota:9},
    {id: 3, nota:8}
];
const getEstudianteById = (id) => new Promise((resolve, reject) => {
    const estudiante = estudiantes.find((e) => e.id === id);
    if(estudiante){
        resolve(estudiante);
    }else{
        reject('El estudiante con id ' + id + ' NO EXISTE...');
       // reject('El estudiante con id ${id} NO EXISTE...');   //TODO ----> NO TOMA "${ID}"
    }
});
getEstudianteById(2)
    .then((data) => {console.log(data)})
    .catch((err) => {console.log(err);});
getEstudianteById(32)
    .then((data) => {console.log(data)})
    .catch((err) => {console.log(err);});
    
const getNotaById = (id) => new Promise((resolve, reject) => {
        const nota = notas.find((e) => e.id === id);
        if(nota){
            resolve(nota);
        }else{
            reject('El estudiante con la id ' + id + ' NO tiene NOTA...');
        }
    });
let idEstudiante = 2
getEstudianteById(idEstudiante)
    .then(estudiante => getNotaById(idEstudiante)
                            .then(nota => console.log('El estudiante ' + estudiante.nombre + ' con la id ' + estudiante.id + ' tiene la nota: ' + nota.nota)))
    .catch((err) => {console.log(err)});    //! no se necesita otro catch porque lo comparten 






//TODO PASAR COMO  CABECERA DE ASYNC | AWAIT
console.log('------------------------ASYNC--|--AWAIT------------------------------------------');
//!------------------------ASYNC--|--AWAIT------------------------------------------------------
async function verEstudiante(ide){                                      //!---------------------
    try{                                                                //!---------------------
        const estudiante = await getEstudianteById(ide);                //!---------------------
        const {nombre, id} = estudiante;                                //!---------------------
        console.log(nombre);                                            //!---------------------
        console.log(id);                                                //!---------------------
        const newNota = await getNotaById(id);                          //!---------------------
        const {nota} = newNota;                                         //!---------------------
        console.log(nota);                                              //!---------------------
    }catch(error){                                                      //!---------------------
        console.log(error);                                             //!---------------------
    }                                                                   //!---------------------
}                                                                       //!---------------------
verEstudiante(10);                                                      //!---------------------
//!---------------------------------------------------------------------------------------------





//TODO PASAR COMO  CABECERA DE FETCH
console.log('------------------------FETCH--------------------------------------------------');
//!------------------------FETCH----------------------------------------------------------------
const unaUrl = './algo.txt'                              //!-------------------------------------
                                                        //!-------------------------------------
const verTxt = (url) => {                               //!-------------------------------------
    fetch(url)                                          //!-------------------------------------
        .then(resultado => clg(resultado))              //!-------------------------------------
};                                                      //!-------------------------------------
verTxt(unaUrl);                                         //!-------------------------------------
//!---------------------------------------------------------------------------------------------
const verTxt2 = (url) => {                              //!-------------------------------------
    fetch(url)                                          //!-------------------------------------
        .then(resultado => resultado.text())            //!-------------------------------------
        .then(texto => console.log(texto))              //!-------------------------------------
};                                                      //!-------------------------------------
verTxt2(unaUrl);                                        //!-------------------------------------
//!---------------------------------------------------------------------------------------------
async function verTxt3(url) {                           //!-------------------------------------
    try{                                                //!-------------------------------------
        const resultado = await fetch(url);             //!-------------------------------------
        const texto = resultado.text();                 //!-------------------------------------
        console.log(texto);                             //!-------------------------------------
    }catch(err){                                        //!-------------------------------------
        console.log(err);                               //!-------------------------------------
    }                                                   //!-------------------------------------
};                                                      //!-------------------------------------
verTxt3(unaUrl);                                        //!-------------------------------------
//!---------------------------------------------------------------------------------------------

const otraUrl = 'https://picsum.photos/list'
const getApi = async(url) => {
    try{
        const resultado = await fetch(url);         
        const texto = resultado.text();               
        console.log(texto);   
    }catch(err){
        console.log(err);
    }
};

function verRegistros(array){

};

//!---------------------------------------------------------------------------------------------
//TODO      https://publicapi.dev