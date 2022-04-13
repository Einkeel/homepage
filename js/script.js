console.log("Cześć!");
let button = document.querySelector(".button")
let pinkpic = document.querySelector(".pinkpic")

button.addEventListener("click", () => {
    pinkpic.classList.toggle("null");
});


button.addEventListener("click", () => {
    if (button.innerText === "Usuń babę") {
        button.innerText = "Przywróć babę";
    } else {
        button.innerText = "Usuń babę"
    }
})