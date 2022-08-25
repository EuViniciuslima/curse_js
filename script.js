//let res = document.querySelector("div#res");

function formulario() {
    const form = document.querySelector(".form");

    function eventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        console.log(nome.value, sobrenome, peso, altura);
    }
    form.addEventListener("submit", eventoForm);
}

formulario();









/*function criaUsu(nome, sobrenome, peso, altura) {
    return [{nome, sobrenome, peso, altura}];
}


function adicionar() {
    if ((nome.length == null) && (sobrenome.length == null) && (Number(peso.value) <= 0) && (Number(altura.value) <= 0)) {
        window.alert("[ERROR] Preencha todos os campos!")
    } else {
        this.nome = nome.length;
        this.sobrenome = sobrenome.length;
        this.peso = Number(peso.value);
        this.altura = Number(altura.value);
    }
}

    //let dados = [{nome, sobrenome, peso, altura}]*/