
function mostrarAlerta(event) {
    event.stopPropagation();
    alert("Hola!");
}

document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector("div");
    div.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});
