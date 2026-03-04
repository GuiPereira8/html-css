const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

let tarefas = [];

function renderizarTarefa() {
    listElement.innerHTML = '';

    tarefas.map((todo) => {
        let liElement = document.createElement('li');
        let tarefaText = document.createTextNode(todo);
        
        let linkElement = document.createElement('a');
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);

        let position = tarefas.indexOf(todo);

        linkElement.addEventListener('click', () => deletarTarefa(position));

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    });
}

buttonElement.addEventListener("click", () => {
    if (inputElement.value === '') {
        window.alert('Digite alguma tarefa');
        return false;
    }else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderizarTarefa();
    }
});

//Função para registrar tarefa apertando tecla Enter.
inputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        buttonElement.click();
    }
});

function deletarTarefa(position) {
    // window.alert(`Posição do item ${position} foi deletado!`);
    tarefas.splice(position, 1);
    renderizarTarefa();
}