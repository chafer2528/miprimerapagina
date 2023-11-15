//alert("Hola este es mi Javascript");
//let nombre = "Maria";

//var nombre1 = "Fernanda";

//const nombre2 = "Rivera";

//console.log("nombre");
//console.log("nombre1");
//console.log("nombre2");

// SELECCIONAR ELEMENTOS

//let contenidoTitulo = "Acerca de mi";

//let titulo = document.querySelector(".acerca-de-mi");
//titulo.innerHTML = contenidoTitulo;

// condicionales

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo)

//if(textoTitulo=="Acerca de mi"){
//    titulo.innerHTML = "Otro";
//} else{
//    console.log("no se cumple");
//}

// funciones

let menu_responsive = document.querySelector(".checkbtn");

      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };


let nombre1 = "Maria Fernanda Rivera";
let ciudad = "Popayan";
let gusto = "aprender"

let parrafo1 =document.querySelector(".parrafo1");

function cambiarTexto(nombre1, ciudad, gusto){
    let contenido = `Soy ${nombre1}, nací en ${ciudad} y vivo en Bucaramanga (Santander), soy Ingeniera Electrónica de profesión, me encanta armar rompecabezas, leer y ${gusto}.`;
    return contenido;
}
parrafo1.innerText = cambiarTexto(nombre1, ciudad,gusto)

// seccion formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});