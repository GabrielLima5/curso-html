let data = [];

function renderTodo() {
  document.querySelector(".todo").innerHTML = "";

  data.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <li><input id="task-${task.id}" type="checkbox">
        <label for="task-${task.id}">${task.title}</label></li>
        <button type="button">X</button>`;

    li.querySelector("input").addEventListener("change", (e) => {
      if (e.target.checked) {
        li.classList.add("complete");
      } else {
        li.classList.remove("complete");
      }
    });

    li.querySelector("button").addEventListener("click", (e) => {
      let button = e.target;
      let li = button.parentNode;
      let input = document.querySelector("input");
      let id = input.id;
      let idArray = id.split("-");
      let todoId = idArray[1];
      let title = document.querySelector("label").innerText;

      if (confirm(`Deseja realmente excluir a tarefa ${title}?`)) {
        data = data.filter((task) => task.id !== parseInt(todoId));

        renderTodo();
      }
    });

    document.querySelector(".todo").append(li);
  });
}

document.querySelector("#new-task").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    data.push({
      id: data.length + 1,
      title: e.target.value,
    });

    e.target.value = "";

    renderTodo();
  }
});

renderTodo();
