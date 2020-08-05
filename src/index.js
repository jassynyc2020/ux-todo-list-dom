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

  let li = document.createElement("li");
  for (let i = 1; (i = todos.length); i++) {
    document.createElement(`ul`);
  }

  h1.innerText = `Todo List`;

  app.appendChild(h1);
}
console.log(`${todos}`);
renderTodoApp();
