const container = document.getElementById("checkboxes");
let array = [];
function mostrarArray(){
    if (array.length>-1){
        for(let i=0; i<array.length; i++){
            console.log(array[i]);
        
        }console.log("\n", array.length);
}else{
    console.log("Sem elementos no array",i);
}
}

function Cadastrar(){
    let task = document.getElementById("tarefa").value;
    let seletor = document.querySelector("#status");
    let opcao = seletor.options[seletor.selectedIndex].value;
    let novaTarefa = {tarefa : task, status: opcao};
    if(task && opcao){
        
        array.push(novaTarefa);
        const quebra = document.createElement("br");
        const divcheck = document.createElement('div');
        divcheck.className = "tarefa";        

        const checkbox = document.createElement('input');
        checkbox.addEventListener('click',clickBoxes);
        checkbox.type= "checkbox";
        checkbox.checked = false;

        const label= document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent=`Tarefa: ${novaTarefa.tarefa} ; Status: ${novaTarefa.status}`;
        
        const deletar = document.createElement('button');
        deletar.innerHTML = '<img src= "8917572.png" class = "lixo">';
        deletar.classList.add("botao");
        deletar.addEventListener('click',deletarRender);

        if(novaTarefa.status == "completo"){
            label.classList.add("riscado");
            checkbox.checked = true;
        }

        divcheck.append(checkbox, label, deletar, quebra);
        container.appendChild(divcheck);
        mostrarArray();
    }
    else{
        alert("Não foi possível adicionar tarefa");
    }
}

function clickBoxes(){
    const checks = container.querySelectorAll('.tarefa');
    
        checks.forEach((element, index) => {
            const cb = element.querySelector('input[type="checkbox"]');
            const lb = element.querySelector('label');
            if(cb.checked){
                array[index].status= "completo";
                lb.textContent = `Tarefa: ${array[index].tarefa} ; Status: ${array[index].status}`;
                lb.style.textDecoration = "line-through";
                lb.classList.add("riscado");
                
            }else{
                array[index].status= "incompleto";
                lb.textContent = `Tarefa: ${array[index].tarefa} ; Status: ${array[index].status}`;
                lb.style.textDecoration = "none";
                lb.classList.remove("riscado");
            }
            mostrarArray();
        });
    }
function deletarRender(event){
    
    if(array.length>-1){
        const clicado = event.currentTarget;
        const boxes = clicado.closest(".tarefa"); 
        array.splice(boxes.selectedIndex, 1);
        boxes.remove();    
        mostrarArray();
    }
        
    
}

