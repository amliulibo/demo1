//1 define a todo class
var Todo = /** @class */ (function () {
    function Todo(content, status) {
        this.content = content;
        this.status = status;
    }
    return Todo;
}());
//2 init todo item
var todoList = [
    new Todo("the first todo", true),
    new Todo("the second todo", false)
];
//3 render todo list
var todourl = document.getElementById("todolist");
function renderList() {
    var listdom = "";
    if (todoList.length > 0) {
        todoList.forEach(function (item, index) {
            //es6 template string
            listdom += "<li class=\"".concat(item.status ? 'item-ok' : '', "\">\n            ").concat(item.content, "\n            </li>");
        });
    }
    else {
        listdom += "<li>no todolist now</li>";
    }
    console.log(listdom);
    todourl.innerHTML = listdom;
}
// add todo
var txtContent = document.querySelector("#txtContent");
var btnAdd = document.querySelector("#btnAdd");
function addTodo() {
    var content = txtContent.value.trim().toString();
    if (!content) {
        alert("please input todo content");
        return false;
    }
    todoList.push(new Todo(content, false));
    txtContent.value = "";
    renderList();
}
btnAdd.addEventListener("click", function () { addTodo(); });
window.onload = function () {
    renderList();
};
