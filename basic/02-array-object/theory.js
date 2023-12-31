// const names = ["Ксения", "Влад", "Анастасия", "Кирилл"];
// const people = [
//   { name: "Ксения", budget: 5500 },
//   { name: "Влад", budget: 52500 },
//   { name: "Анастасия", budget: 15500 },
//   { name: "Кирилл", budget: 3501 },
// ];

// names.push("Алёна");
// names.unshift("Алёна");
// const firstName = names.shift();
// const lastName = names.pop();
//

// console.log(`Names: `, names);
// console.log(firstName);
// console.log(lastName);
//

// array.reverse() - меняет оригинальный массив
// console.log(names.reverse());
// console.log(names);
//

// arrray.toReversed() - не меняет оригинальный массив
// const namesReversed = names.toReversed();
// console.log(namesReversed);
// console.log(names);
//

// const letters = ["b", "d", "a", "e", "c"];
// const numbers = [10, 22, 1, 5, -5];
//

// console.log(letters.sort());
// console.log(numbers.sort((a, b) => a - b));
// console.log(letters.toSorted());
// console.log(numbers.toSorted((a, b) => a - b));
// console.log(letters);
// console.log(numbers);
//

// console.log(names.splice(2, 1));
// console.log(names.splice(1));
// console.log(names);
// console.log(names.toSpliced(2, 1));
// console.log(names);
//

// const women = "Анастасия";
// const index = names.indexOf(women);
// console.log(index);
// names[index] = "Анастасия Великая";
// console.log(names[index]);
// console.log(names); // изменили оригинал
// const newNames = names.with(index, "Анастасия Великая");
// console.log(newNames);
// console.log(names);
//

// const newNames = names.map((name) => {
//   return name.toUpperCase();
// });
// const newNames = names.map((name) => {
//   return name === "Анастасия" ? "Анастасия Великая" : name;
// });
// console.log(newNames);
// console.log(names);
//

// console.log(names.includes("Анастасия"));
//

// const findPerson = people.find((name) => name.budget === 3501);
// console.log(findPerson);
//

// let sum = 0;
// const filtered = people.filter((name) => name.budget > 5000);
// console.log(filtered);
// filtered.forEach((name) => (sum += name.budget));
// console.log(sum); // 73500
//

// const sumBudget = people
//   .filter((name) => name.budget > 5000)
//   .map((name) => name.budget)
//   .reduce((acc, p) => acc + p, 0);
// console.log(sumBudget); // 73500
//

// const string = "Привет, как дела?";
// const reversed = string.split("").toReversed().join("");
// console.log(reversed);
//
