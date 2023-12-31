// const now = new Date();
// console.log(now);

// // const start = new Date(1000 * 60 * 60 * 24 * 365);
// // console.log(start);

// // const date = new Date(2023, 5, 30, 2, 14, 40, 450);
// // console.log(date);

// // console.log(date.getDate());
// // console.log(date.getDay());
// // console.log(date.getFullYear());
// // console.log(date.getYear()); // 123 ?
// //

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());
//

// ===
let mode = "time";

const outputField = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

update();

setInterval(update, 1000);

function update() {
  outputField.innerHTML = format(mode);
}

function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.addEventListener("click", bindMode("full"));

dateBtn.addEventListener("click", bindMode("date"));

timeBtn.addEventListener("click", bindMode("time"));
