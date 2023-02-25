const tarefaInput = document.getElementById('tarefa');
const listaDeTarefas = document.querySelector('.tarefa-lista');
const botaoAdicionar = document.querySelector('.adicionar');

//adicionar tarefa

function adicionarTarefa(valorInput) {
    const tarefa = `<div class="tarefa"> <p>${valorInput}</p><button>x</button></div>`;
    listaDeTarefas.insertAdjacentHTML("beforeend", tarefa);
    console.log('clicou');
}

botaoAdicionar.addEventListener('click', () => {
    adicionarTarefa(tarefaInput.value);
})

//remover tarefa

const tarefas = Array.from(document.querySelectorAll('.tarefa'));
const botoesRemover = Array.from(document.querySelectorAll('.tarefa button'));

botoesRemover.forEach((e, index) => {
    e.addEventListener('click', (e) => {
        console.log(index)
    })
})

tarefas.forEach((e, index) => {
    e.addEventListener('click', (e) => {
        console.log(index)
    })
})