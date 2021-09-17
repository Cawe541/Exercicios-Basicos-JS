const inputTarefa = document.querySelector('.input-nova-tarefa');
const buttonTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDetarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto - tarefaTexto.replace('Apagar', '').trim();
        listaDetarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDetarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput()
    criaBotaoApagar(li)
    salvaTarefas();
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDetarefas = JSON.parse(tarefas);

    for (let tarefa of listaDetarefas) {
        criaTarefa(tarefa);
    }
}

buttonTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (event) {
    const element = event.target;

    if (element.classList.contains('apagar')) {
        element.parentElement.remove();
        salvaTarefas();
    }
});
adicionaTarefasSalvas();