//1 define a todo class
class Todo{
    content: string
    status: boolean
    constructor(content: string, status: boolean) {
        this.content = content;
        this.status=status
    }
}

//2 init todo item
let todoList: Todo[] = [
    new Todo("the first todo", true),
    new Todo("the second todo",false)
]
//3 render todo list
const todourl=document.getElementById("todolist")
function renderList() {
    let listdom = ""
    if (todoList.length > 0) {
        todoList.forEach((item, index) => {
            //es6 template string
            listdom += `<li class="${item.status?'item-ok':''}">
            ${item.content}
            </li>`
        })
    }
    else {
        listdom+="<li>no todolist now</li>"
    }
    console.log(listdom);
    todourl.innerHTML = listdom;
    
    
}
// add todo
const txtContent = document.querySelector("#txtContent");
    const btnAdd = document.querySelector("#btnAdd");
function addTodo() {
    const content = txtContent.value.trim().toString();
    if (!content) {
        alert("please input todo content")
        return false;
    }
    todoList.push(new Todo(content,false))
    txtContent.value = "";
    renderList();
}
btnAdd.addEventListener("click",()=>{addTodo()})
window.onload = function () {
    renderList()
}
