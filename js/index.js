const hola = document.querySelector("#card");
const contacto = document.querySelector("#contacto");
// const contactoPopUp = document.querySelector("#contactoPopUp");
const cerrar = document.querySelector("#cerrarContacto");

const contact = () => {
    contactoPopUp.style.display = "block";
};
const contactClose = (e) => {
    contactoPopUp.style.display = "none";
};

contacto.addEventListener("click", (e) => {
    e.preventDefault();
    contact();
});
cerrar.addEventListener("click", (e) => {
    e.preventDefault();
    contactClose();
});
// contactoPopUp.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     contactClose();
// });
// // const card = document.querySelectorAll(".card");
// console.log(card);

// function flipCard() {
//     card.classList.toggle("flip");
// }
// card.forEach((card) => card.addEventListener("click", flipCard));
// hola.addEventListener("click", () => {
//   console.log("hola");
// });
// const descripcion = document.querySelector("#descripcionProyecto");
// const palabras = document.querySelector("#palabras");
// function myMove() {
//   palabras.style.display = "block";
//   var pos = 0;
//   var id = setInterval(frame, 50);
//   function frame() {
//     if (pos == 150) {
//       clearInterval(id);
//     } else {
//       pos++;
//       descripcion.style.bottom = pos + "px";
//     }
//   }
// }