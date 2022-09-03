// Captura o evento de submit do formulário
const form = document.querySelector(".form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso, altura);

    if (!peso) {
        setResultado('peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return
    }

    const imc = getImc(peso, altura);
    console.log(imc);
});

function getNivel() {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3'];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resp = document.querySelector(".resp");
    resp.innerHTML = "";

    const p = criaP();
    p.innerHTML = msg;
    resp.appendChild(p);
}