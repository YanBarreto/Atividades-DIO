



function adicionar() {

    /* Criando elementos */

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkBoxList";

    /* Incluindo elementos a ul */

    let ul = document.querySelector("ul");
    let novaTarefa = document.formulario.task.value; //navegando pelo codigo... name do elemento.
    novaTarefa = document.createTextNode(novaTarefa);

    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(novaTarefa);

    realizada(checkbox, li); //Cria 1 listener a cada clique em adicionar e cada um fica escutando o evento da sua propria checkbox e li.

}



function realizada(checkbox, li) {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked === true) {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";

        } else {
            li.style.textDecoration = null;
            li.style.color = null;
        }

    });
}
