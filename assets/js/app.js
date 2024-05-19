const tarefaInput = document.querySelector("#tarefaInput");
const dataInput = document.querySelector("#dataInput");
const buttonSubmit = document.querySelector("#addTarefa");

buttonSubmit.addEventListener("click", addTarefa);

function addTarefa() {
    let tarefa = new Object();
    tarefa.id = obterID();
    tarefa.nome = tarefaInput.value;
    tarefa.data = dataInput.value;
    tarefa.status = "Concluir"

    //populando objeto json
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));



    //criando linha
    const linha = document.createElement("tr");

    //criando elementos da linha
    const celulaNomeTarefa = document.createElement("td");
    celulaNomeTarefa.innerText = tarefa.nome;

    const celulaDataTarefa = document.createElement("td");
    celulaDataTarefa.innerText = tarefa.data;

    //botao status
    const botaoStatus = document.createElement("button");
    botaoStatus.innerText = tarefa.status;

    //botao remover
    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover"
    botaoRemover.classList.add("botaoRemover");

    const celulaStatusTarefa = document.createElement("td");
    celulaStatusTarefa.id = "celulaStatusTarefa"
    celulaStatusTarefa.appendChild(botaoStatus);
    celulaStatusTarefa.appendChild(botaoRemover);

    linha.appendChild(celulaNomeTarefa);
    linha.appendChild(celulaDataTarefa);
    linha.appendChild(celulaStatusTarefa);

    //adicionando linha
    const corpoTabela = document.querySelector("#corpoTabela");
    corpoTabela.appendChild(linha);

    //removendo linha
    botaoRemover.addEventListener("click", function(removeLinha){
        // console.log("entrei");
        corpoTabela.removeChild(linha);
    })

    //concluindo tarefa
    botaoStatus.addEventListener("click", function(concluiTarefa){
        tarefa.status = "Concluido"
        botaoStatus.innerText = tarefa.status;
    })

    
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