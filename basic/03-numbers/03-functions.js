// func1();
// func2(); // не работает ДО инициализации

// function func1(name) {
//   console.log("Function Declaration " + name);
// }

// const func2 = function () {
//   console.log("Function Expression");
// };

// func1();
// func2();

// console.log(typeof func1); // function
// console.log(typeof func2); // function
// console.dir(func1);
//

// setTimeout(func1, 1500);
// setTimeout(function () {
//   func1("cool");
// }, 1500);

// let counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);
//

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// const greet = (name) => {
//   console.log(`Hello, ${name}`);
// };
// greet("Jhon");

// const powFunc = function (num, exp) {
//   return Math.pow(num, exp);
// };
// console.log(powFunc(2, 4));

// const powArrow = (num, exp) => Math.pow(num, exp);
// console.log(powArrow(2, 3));
//

// function sum(a = 10, b = a / 4) {
//   return a + b;
// }
// console.log(sum());
//

// function sumArray(...numbers) {
//   return numbers.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(sumArray(1, 2, 3, 4, 5, 6, 7));
//

// function closer
// function createName(name) {
//   return function (lastName) {
//     console.log(`${name} ${lastName}`);
//   };
// }

// const nameJhon = createName("John");
// // console.log(name1);
// nameJhon("Snow"); // John Snow
// createName("Sansa")("Stark"); // Sansa Stark
//
