// event loop
// const timeout1 = setTimeout(() => {
//   console.log("... 2 sec");
// }, 2000);
// clearTimeout(timeout1);

// const timeout2 = setTimeout(() => {
//   console.log("... 3 sec");
// }, 3000);
//

// let count = 0;
// setInterval(() => {
//   console.log("tick", ++count);
// }, 1000);
//

// function delay(callback, time = 1000) {
//   setTimeout(callback, time);
// }

// delay(() => console.log("tick"));

// delay(() => console.log("5 sec"), 5000);
// delay(() => console.log("1 sec"));
// delay(() => console.log("3 sec"), 3000);

// setTimeout(() => console.log("5 sec"), 5000);
// setTimeout(() => console.log("1 sec"), 1000);
// setTimeout(() => console.log("3 sec"), 3000);

// const delay = (time = 1000) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout((data) => {
//       // resolve([1, 2, 3]);
//       reject("error in delay");
//     }, time);
//   });
//   return promise;
// };

// delay(2500)
//   .then((data) => {
//     console.log(data);
//     return data.map((x) => x * 2);
//   })
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("... end.");
//   });

// const getData = () =>
//   new Promise((resolve, reject) => {
//     resolve([1, 2, 3]);
//   });

// // getData().then((array) => console.log(array));

// async function asyncExample() {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch {
//   } finally {
//     console.log("FINALLY");
//   }
// }

// asyncExample();
