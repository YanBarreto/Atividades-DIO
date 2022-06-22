var contId = 0;

function adicionar(){
    var input = document.getElementById("input").value;
    var ulist = document.getElementById("todoList");
    var li = document.createElement("li");
    
    var checkBox = document.createElement("input");
    var label = document.createElement("label");

    var id = contId + 1;

    checkBox.setAttribute("type","checkbox");
    checkBox.setAttribute("class","checkBoxList");
    checkBox.setAttribute("id","checkBox_"+id);
    checkBox.setAttribute("onclick","itemConcluido()");

    label.setAttribute("for","checkBox_"+id);
    label.setAttribute("id","checkBoxItem_"+id);
    label.appendChild(document.createTextNode(input));

    li.appendChild(checkBox);
    li.appendChild(label);
    ulist.appendChild(li);
    
    contId = id;
    
}

function itemConcluido(){
    
    var feito = document.getElementsByClassName("checkBoxList");

    for (let index = 0; index <= feito.length; index++) {

        if(feito[index].checked == true){
            let num = index+1;
            document.getElementById("checkBoxItem_"+num).style.textDecoration = "line-through"; 
        }else{
            document.getElementById("checkBoxItem_"+num).style.textDecoration = "none"; 
        }
        

        //ESTUDAR EVENT LISTENER
              
    }

       
    }

