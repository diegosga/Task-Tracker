
const container = document.getElementById("checkboxes");
let array = [];

let i = -1;
function mostrarArray(){
    let elementos = "Elementos: \n";
    for(let i=0; i<array.length; i++){
        elementos+=`Tarefa:  ${i}  ${array[i].tarefa} ; Status: ${array[i].status}\n`;
    }
    console.log(elementos);
}

function Cadastrar(){
    i=i+1;
    let task = document.getElementById("tarefa").value;
    let seletor = document.querySelector("#status");
    let opcao = seletor.options[seletor.selectedIndex].value;
    let novaTarefa = {tarefa : task, status: opcao};
    if(task && opcao){
        
        array.push(novaTarefa);

        const divcheck = document.createElement('div');
        divcheck.className = "tarefa";        

        const checkbox = document.createElement('input');
        checkbox.addEventListener('click',clickBoxes);
        checkbox.type= "checkbox";
        checkbox.id = i;
        checkbox.checked = false;

        const label= document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent=`Tarefa:${novaTarefa.tarefa} ; Status: ${novaTarefa.status}`;
        
        const deletar = document.createElement('button');
        deletar.innerHTML = '<img src= "8917572.png" class = "lixo">';
        deletar.classList.add("botao");
        deletar.id= i;
        deletar.addEventListener('click',()=>{
            divcheck.remove();
            array.splice(deletar.id, 1);
            i-=1;
        });

        if(novaTarefa.status == "completo"){
            label.classList.add("riscado");
            checkbox.checked = true;
        }

        divcheck.append(checkbox, label, deletar);
        container.appendChild(divcheck);
        container.appendChild(document.createElement("br"));


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
                lb.textContent = `Tarefa:  ${cb.id}  ${array[index].tarefa} ; Status: ${array[index].status}`;
                lb.style.textDecoration = "line-through";
                lb.classList.add("riscado");
                
            }else{
                array[index].status= "incompleto";
                lb.textContent = `Tarefa:  ${cb.id}  ${array[index].tarefa} ; Status: ${array[index].status}`;
                lb.style.textDecoration = "none";
                lb.classList.remove("riscado");
            }
        });
    }
