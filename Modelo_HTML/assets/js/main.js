// Captura o evento de submit do formulário
const form = document.querySelector(".form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso, altura);

    if (peso <= 0) {
        setResultado('Peso inválido', false);
        return;
    }
    if (altura <= 0) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const statusImc = getStatus(imc);
    console.log(imc, statusImc);
});

function getStatus(imc) {
    /*
    Menos do que 18,5   Abaixo do peso
    Entre 18,5 e 24,9   Peso Normal
    Entre 25 e 29,9     Sobrepeso
    Entre 30 e 34,9     Obesidade grau 1
    Entre 35 e 39,9     Obesidade grau 2
    Mais do que 40      Obesidade grau 3
    */
    const status = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2' , 'Obesidade grau 3'];

    if (imc >= 39.9) return status[5];
    if (imc >= 34.9) return status[4];
    if (imc >= 29.9) return status[3];
    if (imc >= 24.9) return status[2];
    if (imc >= 18.5) return status[1];
    if (imc < 18.5) return status[0];
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