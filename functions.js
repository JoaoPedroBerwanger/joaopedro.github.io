var lista = JSON.parse(localStorage.getItem("tarefas")) || [];

function adicionarTarefas() {

    do {

        var tarefa = prompt("Informe a tarefa a ser realizada: (Em branco sai)")

        if (tarefa && tarefa.trim() != "") {
            lista.push(tarefa);
            salvarLista();
            atualizaLista(lista);
        }

    } while (tarefa && tarefa.trim() != "");

}

function atualizaLista() {

    var listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {

        var li = document.createElement("li");
        li.textContent = lista[i];
        listaTarefas.appendChild(li);

    }

    return listaTarefas;

}

function salvarLista() {
    localStorage.setItem("tarefas", JSON.stringify(lista));
}

function limparTarefas() {

    var resposta = confirm("A exclusão não tem volta, tem certeza que deseja continuar?")

    if (resposta) {
        localStorage.removeItem("tarefas");
        lista = [];
        atualizaLista();
    } else {
        return
    }
}

document.addEventListener("DOMContentLoaded", function() {
    atualizaLista(); 
})

