// Captura o evento de submit do formulário
const form = document.querySelector(".form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
})

function setResultado(msg) {
    const resp = document.querySelector(".resp");
    resp.innerHTML = "";

    const p = document.createElement('p');
}