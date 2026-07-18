const imagenes = document.querySelectorAll(".IMG");
imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        imagen.classList.toggle("ampliar");

    });

});