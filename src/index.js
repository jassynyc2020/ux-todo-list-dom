let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  let ul = document.createElement("ul");
  ul.classList.add("todo-container");

  h1.innerText = `Todo List`;
  app.appendChild(h1);
  app.appendChild(ul);

  for (let i = 0; i < todos.length; i++) {
    let choresList = todos[i];
    let choresListMarkup = `
    <li class="list-item"><input type="checkbox">${choresList.description}
    </input></li>
    `;
    ul.innerHTML += choresListMarkup;
  }
}

renderTodoApp();
