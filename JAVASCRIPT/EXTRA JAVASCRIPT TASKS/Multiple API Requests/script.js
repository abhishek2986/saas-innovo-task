const fetchBtn = document.getElementById("fetchBtn");
const result = document.getElementById("result");

//event listener for the button click
fetchBtn.addEventListener("click", fetchData);

async function fetchData() {
  try {
    result.innerHTML = "<h2>Loading...</h2>";

    // Create API requests
    const usersPromise = fetch("https://jsonplaceholder.typicode.com/users");
    const todosPromise = fetch("https://jsonplaceholder.typicode.com/todos");

    // Wait for both requests to complete
    const [usersResponse, todosResponse] = await Promise.all([
      usersPromise,
      todosPromise,
    ]);

    //manual error handling for failed requests
    if (!usersResponse.ok || !todosResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    // Convert responses into jsonformat
    const users = await usersResponse.json();
    const todos = await todosResponse.json();

    result.innerHTML = "";

    // Display each user with their todos
    users.forEach((user) => {
      result.innerHTML += `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <h3>Todos:</h3>
      `;

      todos.forEach((todo) => {
        if (user.id === todo.userId) {
          result.innerHTML += `
            <p>
              ${todo.completed ? "✅" : "❌"}
              ${todo.title}
            </p>
          `;
        }
      });

      result.innerHTML += "<hr>";
    });
  } catch (error) {
    console.log(error);
    result.innerHTML = "<h2>Error fetching data.</h2>";
  }
}
