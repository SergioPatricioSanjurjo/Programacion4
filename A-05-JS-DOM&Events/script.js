//! --------------------DOM-&-Events------------------------------------------------------------
console.log('---------DOM-&-Events--------------------------------------');
//!----------------Ejercicio 01:-----------------------------------------------------------------
//?Cambia el contenido de un elemento `<p>` con el id "miParrafo" a "Hola, mundo!".
const eje01 = document.querySelector('#miParrafo');
eje01.textContent = '"Hola, Mundo"';

//!----------------Ejercicio 02:-----------------------------------------------------------------
//?Añade una clase "resaltado" a un elemento `<div>` con el id "miDiv".
const eje02 = document.querySelector('#miDiv');
eje02.className = 'resaltado';

//!----------------Ejercicio 03:-----------------------------------------------------------------
//?Elimina un elemento `<ul>` con el id "miLista" de la página.
const eje03 = document.querySelector('#miLista');
let par03 = eje03.parentNode;
par03.removeChild(eje03);

//!----------------Ejercicio 04:-----------------------------------------------------------------
//?Crea un botón y, al hacer clic en él, muestra un mensaje de alerta que diga "¡Hiciste clic!".
const eje04 = document.querySelector('#btn04');
btn04.onclick = function() {
    alert('"!Hiciste Click!"');
};

//!----------------Ejercicio 05:-----------------------------------------------------------------
//?Agrega un evento que cambie el color de fondo de un elemento `<div>` al pasar el 
//?mouse sobre él y lo restaure cuando se retire el mouse.
const eje05 = document.querySelector('#eje05');
eje05.addEventListener('mouseover', function() {
    eje05.style.backgroundColor = "red";
});
eje05.addEventListener('mouseout', function() {
    eje05.style.backgroundColor = "aqua";
});

//!----------------Ejercicio 06:-----------------------------------------------------------------
//?Crea un formulario con un campo de texto y un botón. Al hacer clic en el botón, 
//?muestra el valor del campo de texto en un elemento `<p>`.
const eje06btn = document.querySelector('#btn06');
const eje06area = document.querySelector('#text06');
const eje06p = document.querySelector('#p06');
eje06btn.onclick = function() {
    let unP = eje06area.value;
    eje06p.textContent += unP; //TODO Revisar porque se desaparece despues del click
};

//!----------------Ejercicio 07:-----------------------------------------------------------------
//?Añade un evento que escuche cuando se presione una tecla en el documento y 
//?muestre el código de la tecla presionada en un elemento `<p>`.
const eje07 = document.querySelector('#p07');
document.addEventListener('keydown', function(event) {
    let tecla07 = event.code;
    eje07.textContent = tecla07;
});

//!----------------Ejercicio 08:-----------------------------------------------------------------
//?Crea una lista de elementos `<li>`. Al hacer clic en un elemento de la lista, 
//?cambia su color de fondo.
const eje08 = document.querySelector('#ol08');


//!----------------Ejercicio 09:-----------------------------------------------------------------
//?Implementa un contador que incremente en 1 cada vez que se haga clic en un botón.

//!----------------Ejercicio 10:-----------------------------------------------------------------
//?Crea una galería de imágenes. Al hacer clic en una imagen,
//? muestra su descripción en un elemento `<p>`.

//!----------------Ejercicio 11:-----------------------------------------------------------------
//?Agrega un botón que oculte o muestre un elemento `<div>` con el id "miDiv".

//!----------------Ejercicio 12:-----------------------------------------------------------------
//?Crea un menú desplegable (select) con tres opciones. Al seleccionar una opción, 
//?muestra un mensaje con el valor seleccionado.

//!----------------Ejercicio 13:-----------------------------------------------------------------
//?Implementa un reloj digital que muestre la hora actual y se actualice cada segundo.

//!----------------Ejercicio 14:-----------------------------------------------------------------
//?Crea una tabla con filas y columnas. Al hacer clic en una celda, cambia su contenido.

//!----------------Ejercicio 15:-----------------------------------------------------------------
//?Agrega un formulario de contacto que valide que se ingrese un correo electrónico 
//?válido antes de enviar el formulario.

//!----------------Ejercicio 16:-----------------------------------------------------------------
//?Implementa una calculadora básica que realice operaciones de suma, resta, multiplicación y división.

//!----------------Ejercicio 17:-----------------------------------------------------------------
//?Crea un juego de "Adivina el número" en el que el programa genera un número 
//?aleatorio y el usuario debe adivinarlo