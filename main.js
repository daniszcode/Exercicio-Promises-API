/*function fazRequisicao() {
    return new Promise((resolve, reject) => {
        console.log("Rodou");
        resolve("promise resolvida");

    });
}*/
const botao = document.querySelector('#input')
var res = document.querySelector('div#res')

async function principal() {
    try {
        const respostaAsync = await fetch('https://reqres.in/api/users?page=2');
        const resposta = await respostaAsync.json();
        return mostrar(resposta);

    } catch (erro) {
        return "Ocorreu erro " + erro;
    }
}



principal()

function mostrar(users) {
    let entrada = []
    console.log(users.data)
    for (let user of users.data) {
        entrada.push(`<li>${user.first_name}</li>`)
    }

    document.querySelector('div#res').innerHTML = entrada

}

