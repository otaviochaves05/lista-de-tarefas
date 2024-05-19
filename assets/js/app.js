const tarefaInput = document.querySelector("#tarefaInput");
const dataInput = document.querySelector("#dataInput");
const buttonSubmit = document.querySelector("#addTarefa");

buttonSubmit.addEventListener("click",addTarefa);

function addTarefa() {
    let tarefa = new Object();
    tarefa.id = obterID();
    tarefa.nome = tarefaInput.value;
    tarefa.data = dataInput.value;
    tarefa.status = "Pendente"


    //populando objeto json
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

}


// function mostrarTarefas() {
//     let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];-
// }


function obterID() {
    let id = parseInt(localStorage.getItem("id")) || 0;
    id++;
    localStorage.setItem("id", id);
    return id;
}