function formulario() {
    const form = document.querySelector(".form");
    const res = document.querySelector("div#res");
    const usu = [];

    function eventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const rg = form.querySelector(".rg");
        const cpf = form.querySelector(".cpf");

        usu.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            rg: rg.value,
            cpf: cpf.value
        });

        console.log(usu);
        res.innerHTML += `<p>Nome: ${nome.value} Sobrenome: ${sobrenome.value} RG: ${rg.value} CPF: ${cpf.value}</p>`;
    }

    form.addEventListener("submit", eventoForm);
    window.alert('enviado!')
}
formulario();