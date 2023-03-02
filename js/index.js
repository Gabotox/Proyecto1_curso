let mostrar  = document.querySelector("#mostrar");
let menu = document.querySelector(".menu_navegacion");
let ocultar = document.querySelector("#cerrar");


mostrar.addEventListener("click", mostrarMenu);
function mostrarMenu() {
    menu.style.right = "0";
}

ocultar.addEventListener("click", ocultarMenu);
function ocultarMenu() {
    menu.style.right = "-100%";
}
