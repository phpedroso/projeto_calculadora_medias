const form = document.getElementById('form-agenda');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalContatos();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`A Contato: ${inputNomeContato.value} já está cadastrado`);

    } else {

    contatos.push(inputNomeContato.value);
    telefones.push(parseFloat(inputTelefoneContato.value));

    let linha = `<tr>`;
    linha +=`<td>${inputNomeContato.value}</td>`;
    linha +=`<td>${inputTelefoneContato.value}</td>`;
    linha +=`<tr>`;

    linhas += linha;   
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;
}

function atualizaTotalContatos(){
    const totalContatos = contatos.length;

    document.getElementById('total-contatos').innerHTML = totalContatos;
}