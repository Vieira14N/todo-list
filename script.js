const tarefaInput = document.getElementById('tarefa'); //valor input
const listaDeTarefas = document.querySelector('.tarefa-lista'); //parent element
const botaoAdicionar = document.querySelector('.adicionar');

//adicionar tarefa
function criarElemento(input) {
    const tarefa = document.createElement('div')
    tarefa.innerHTML = `<p>${input}</p><button>x</button>`
    tarefa.classList.add('tarefa')
    listaDeTarefas.appendChild(tarefa)
}

botaoAdicionar.addEventListener('click', () => {
    criarElemento(tarefaInput.value);

    const botoesRemover = document.querySelectorAll('.tarefa button');
    const tarefas = document.querySelectorAll('.tarefa');

    botoesRemover.forEach((e,index) => {
        e.addEventListener('click', e => {
            tarefas.forEach((t,indexT) => {
                t.addEventListener('click', t => {
                    if(index === indexT){
                        t.target.parentElement.remove()
                    }
                })
            })
        })
    })
})





