const card = document.querySelectorAll(".cardContenido");
console.log(card);
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", () => {
        card[i].classList.toggle("is-flipped");
    });
}