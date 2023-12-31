// const person = {
//   name: "Peter",
//   years: 1994,
//   height: 200,
// };

// const json = JSON.stringify(person);
// console.log(json); // {"name":"Peter","years":1994,"height":200}, string
// const parsed = JSON.parse(json);
// console.log(parsed); // {name: 'Peter', years: 1994, height: 200}, object
//

const list = document.querySelector("#list");
const filter = document.querySelector("#filter");
let USERS = [];

filter.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  render(filteredUsers);
});

async function start() {
  list.innerHTML = `Loading...`;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await response.json();
    USERS = data;
    setTimeout(() => render(data), 1500);
  } catch (error) {
    list.style.color = "red";
    list.innerHTML = error.message;
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = `No users...`;
  } else {
    const array = users.map(toHTML).join("");
    list.innerHTML = array;
  }
}

function toHTML(user) {
  return `
    <li class="list-group-item">${user.name}</li>
  `;
}

start();
