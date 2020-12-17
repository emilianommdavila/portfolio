const menuIcono = document.querySelector("#botonIcono");
const menuDesplegable = document.querySelector("#menuDesplegable");
let abierto = false;

menuIcono.addEventListener("click", () => {
    if (abierto === false) {
        menuDesplegable.style.display = "flex";
        abierto = true;
    } else {
        menuDesplegable.style.display = "none";
        abierto = false;
    }
});