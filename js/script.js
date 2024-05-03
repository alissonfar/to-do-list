let contador = 0
let input = document.getElementById('input-tarefa')
let btnAdd = window.document.getElementById('btn-add')
let main = window.document.getElementById('area-lista')


function addTarefa() {
    // primeiramente pegar o valor digitado no input
    let valorInput = input.value 

    if ((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)) {
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
        <div  onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="bi bi-circle"></i>
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}

        </div>

        <div class="item-botao">
            <button class="delete" onclick="deletar(${contador})" ><i class="bi bi-x-circle-fill"></i>Deletar</button>

        </div>
    </div>`

    main.innerHTML += novoItem

    input.value = "" //zerou o campo de input
    input.focus();
        
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')

    if(classe =="item"){
        item.classList.add('selecionado')

        var icone = document.getElementById('icone_'+id)
        
        icone.classList.remove('bi-circle')
        icone.classList.add('bi-check-circle-fill')

        item.parentNode.appendChild(item)


    } else {
        item.classList.remove('selecionado')

        var icone = document.getElementById('icone_'+id)
        
        icone.classList.remove('bi-check-circle-fill')
        icone.classList.add('bi-circle')
    }
}

input.addEventListener("keyup", function(event){
    // tecla 13 é o enter (de acordo com o vídeo cada tecla tem um número)
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})