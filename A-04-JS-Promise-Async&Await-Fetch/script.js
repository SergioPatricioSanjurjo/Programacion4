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
//!-----------------------EJEMPLO-------------------------------------------------------------
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
       // console.log(`El estudiante con id ${id} NO EXISTE...`);   //TODO ------> TOMA "${ID}" CON LAS `${ID}` 
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
//!---------------------------------------------------------------------------------------------------------------------------------------------------------------

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
const unaUrl = 'file:///c:/Users/Sergio/Desktop/UTN/4%20Cuatrimestre/Laboratorio%204/Prog4/A-04-JS-Promise-Async&Await-Fetch/text.txt';
//!------------------------FETCH----------------------------------------------------------------
const verTxt = (url) => {                                   //!---------------------------------
    fetch(url)                                              //!---------------------------------
        .then(resultado => resultado.text())                //!---------------------------------
        .then(data => console.log(data))                    //!---------------------------------
        .catch(err => console.error('ERROR!!!: ', err))     //!---------------------------------
};                                                          //!---------------------------------
//*verTxt(unaUrl);                                             //!---------------------------------
//!---------------------------------------------------------------------------------------------
const verTxt2 = (url) => {                              //!-------------------------------------
    fetch(url)                                          //!-------------------------------------
        .then(resultado => resultado.text())            //!-------------------------------------
        .then(texto => console.log(texto))              //!-------------------------------------
};                                                      //!-------------------------------------
//*verTxt2(unaUrl);                                        //!-------------------------------------
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
//*verTxt3(unaUrl);                                        //!-------------------------------------
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
//*function verRegistros(array){};
//!---------------------------------------------------------------------------------------------
//TODO      No pude hacer funcionar el text.txt con url
//TODO      https://publicapi.dev

//! --------------------Promise-Async&Await-Fetch-----------------------------------------------
console.log('-------Promise-Async&Await-Fetch--------------------------------------');
//!----------------Ejercicio 1:-----------------------------------------------------------------
//?Crea una Promise que se resuelva después de 2 segundos y muestra un mensaje cuando se resuelva.
console.log('---------01-----------------------------------------------------');
let promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('La Promise1 se resolvio luego de 2 segundos')
}, 2000)});
promise1.then(msg => console.log(msg))
        .catch(err => console.log('ERROR!!!' + err));

//!----------------Ejercicio 2:-----------------------------------------------------------------
//?Crea una función que acepte un número y devuelva una Promise que se resuelva 
//?con el doble del número después de 1 segundo.
console.log('---------02-----------------------------------------------------');
function eje2(num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let res = 2*num2;
            resolve('Promise2 se resolvio luego de 1 segundo: ' + res)
        }, 1000)
    })
};
let num2 = 3;
eje2(num2).then(msg => console.log(msg))
            .catch(err => console.log('ERROR!!!' + err));

//!----------------Ejercicio 3:-----------------------------------------------------------------
//?Crea dos Promises que se resuelvan después de 3 segundos cada una. Combina ambas Promises 
//?para mostrar un mensaje cuando ambas se hayan resuelto. (Pista: usar Promise.all)
console.log('---------03-----------------------------------------------------');
let promise31 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('La Promise31 se resolvio junto a 32 luego de 3 segundos')
    }, 3000)
});
let promise32 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('La Promise32 se resolvio junto a 31 luego de 3 segundos')
    }, 3000)
});
Promise.all([promise31, promise32]).then(msg => console.log(msg))
                                    .catch(err => console.log('ERROR!!!' + err));

//!----------------Ejercicio 4:-----------------------------------------------------------------
//?Crea una función que simule una solicitud HTTP asincrónica utilizando setTimeout y 
//?devuelva una Promise que se resuelva con un objeto JSON después de 2 segundos.
console.log('---------04-----------------------------------------------------');
function eje4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                timer: 'eje4 resuelto luego de 2 segundos',
                mensajes: {msg1: 'mensaje 1 de ej 4', msg2: 'mensaje 2 de ej 4'}
            });
        }, 2000)
    });
};
eje4().then(jsonObj => console.log(jsonObj));

//!----------------Ejercicio 5:-----------------------------------------------------------------
//?Crea una función que acepte un arreglo de números y devuelva una Promise que se 
//?resuelva con la suma de los números después de 1 segundo. (Usar reduce)
console.log('---------05-----------------------------------------------------');
function eje5(unArr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rta = 0;
            unArr.forEach(item => {
                rta += item;
            });
            resolve('La suma se realizo despues de 1 segundo y la respuesta es: ' + rta);
        }, 1000)
    });
};
const unArr5 = [9,8,7,6,5,4,3,2,1];
eje5(unArr5).then(resolve => console.log(resolve));

//!----------------Ejercicio 6:-----------------------------------------------------------------
//?Crea una función asincrónica que haga una solicitud HTTP a una API de tu elección utilizando 
//?la función fetch y devuelva el resultado en formato JSON. Maneja los errores posibles.
console.log('---------06-----------------------------------------------------');
async function eje6() {
    try{
        let apiReq = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if(apiReq.ok) {
            let response = await apiReq.json();
            return response;
        }else {
            throw new Error(`HTTP ERROR!!! status: ${apiReq.status}`);
        }
    }
    catch(error){
        console.log(error);
    }
};
eje6().then(res => console.log(res));

//!----------------Ejercicio 7:-----------------------------------------------------------------
//?Investigar una Api que se pueda paginar. Crea una función asincrónica que haga una serie de 
//?solicitudes HTTP secuenciales para obtener datos de una API paginada. Utiliza async/await
//?para manejar la paginación hasta que todos los datos se hayan recuperado.
console.log('---------07-----------------------------------------------------');
async function eje7() {
            let url = 'https://jsonplaceholder.typicode.com/posts';
            let data = [];
            let pageNumber = 1;
            while (true) {
                const response = await fetch(`${url}?_page=${pageNumber}`);
                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                }
                const posts = await response.json();
                if (posts.length === 0) {           //*Página vacía = final de los datos
                    break;
                }
                data = data.concat(posts);          //*Add las paginas a la resp
                pageNumber++;                       //*Siguiente pag
            }
            return data;
};
eje7().then(data => console.log(data))
        .catch(error => console.log(error));