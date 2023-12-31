/*
const array = [1, 2, 3, 4, 5, 6];
const arrayString = ["a", "b", "c"];

console.log(array);
*/

const inputTitle = document.getElementById("title");
const buttonAdd = document.getElementById("create");
const listItems = document.getElementById("list");

const notes = [
  {
    title: "notes 1",
    completed: false,
  },
  {
    title: "notes 2",
    completed: true,
  },
  {
    title: "notes 3",
    completed: false,
  },
  {
    title: "notes 4",
    completed: false,
  },
];

function getNoteTemplate(note, index) {
  return `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class='${note.completed ? "text-decoration-line-through" : ""}'>${
    note.title
  }</span>
    <span>
      <span class="btn btn-small btn-${
        note.completed ? "warning" : "success"
      }" data-index="${index}" data-type="toggle">&check;</span>
      <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
    </span>
  </li>
  `;
}

function render() {
  listItems.innerHTML = ``;
  if (notes.length === 0) {
    listItems.innerHTML = `<p>Здесь ничего нет...</p>`;
  }
  for (let i = 0; i < notes.length; i++) {
    listItems.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
  // for (let note of notes) {
  //   listItems.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  // }
}

buttonAdd.addEventListener("click", () => {
  if (inputTitle.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputTitle.value,
    completed: false,
  };
  // listItems.insertAdjacentHTML("beforeend", getNoteTemplate(newNote));
  notes.push(newNote);
  render();
  inputTitle.value = ``;
});

listItems.addEventListener("click", (event) => {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }

    render();
  }
});

render();

/*
Objects

const person = {
  firstName: "John",
  lastName: "Stark",
  year: 30,
  hasGirl: false,
  getFullName: () => {
    console.log(this.firstName);
  },
};

console.log(person);
*/
