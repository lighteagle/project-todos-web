let todoInput = document.getElementById("newTodo");
let incompleteTodo = document.getElementById("incomplete-todo");

const createTodoElement = newTodoText => {
  // Create newElement :  ListItem, Checkbox, text(editInput), button(edit), button(delete)
  let listItem = document.createElement("li");
  // let checkbox = document.createElement("input");
  let label = document.createElement("label");
  let editButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  // Modifiy newElement
  // checkbox.type = "checkbox";

  editButton.innerText = "Edit";
  editButton.class = "edit";
  label.className = "label-todo";

  deleteButton.innerText = "Delete";
  deleteButton.className = "Delete";
  deleteButton.setAttribute("onclick", "this.parentNode.remove()");

  label.innerText = newTodoText;
  label.className = "noStrikethrough";

  label.setAttribute(
    "onclick",
    "this.className==='strikethrough'?this.className='noStrikethrough':this.className='strikethrough';localStorage['list'] = incompleteTodo.innerHTML"
  );
  // Append newElement
  // listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  return listItem;
};

//Add a new todo
const addTodoList = () => {
  event.preventDefault();
  // create new list item with the text from #newTodo
  if (todoInput.value) {
    let listItem = createTodoElement(todoInput.value);
    incompleteTodo.appendChild(listItem);
    todoInput.value = "";
    localStorage["list"] = incompleteTodo.innerHTML;
  } else {
    alert("Please input todo!");
  }
};

if (localStorage["list"]) {
  incompleteTodo.innerHTML = localStorage["list"];
}
addTodoBtn.onclick = addTodoList;
