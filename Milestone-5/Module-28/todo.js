const loadTodo = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => displayTodo(data))
    .catch(error => console.log("Error is", error));
}


const displayTodo = (todos) => {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";
    todos.forEach(todo => {
        const todoCard = document.createElement("div");
        todoCard.classList = "todo-card space-y-3 shadow-md px-6 py-4 bg-white rounded-lg flex justify-between gap-2.5";
        todoCard.innerHTML = `
            <h2 class="text-xl font-bold">${todo.title}</h2>
            <p class="font-semibold flex justify-between items-center gap-2"> ${todo.completed == true ? '<i class="fa-solid fa-square-check"></i>' : '<i class="fa-regular fa-square-check"></i>'}</p>
        `        
        todoContainer.appendChild(todoCard);
    });
}
loadTodo();