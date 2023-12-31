const person = {
  name: "Jhon",
  age: 30,
  isYoutube: true,
  languages: ["ru", "en"],
  address: {
    city: "Saint-Petersburg",
    street: "Nevskiy",
  },
  "complex key": "complex value",
  ["key_" + new Date().getTime()]: "complex value",
  greet() {
    console.log("Hello, this person", this);
  },
  arrowFunction: () => {
    console.log("arrow func", this);
  },
  info() {
    console.log(this);
    console.log(`Hello, this ${person.name}`);
  },
};

// console.log(typeof person);
// console.log(typeof null); // object!!!
//

// console.log(person);
// person.greet();
// person.arrowFunction();
// person.info();
//

// const name = person.name;
// const age = person.age;
// const { age, name: nameFirst = "your name" } = person;
// const name = "Peter";
// console.log(nameFirst, age);
//

// console.log(person);
// console.log([1, 2]);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
// значит, что ключи key имеются именно у person, а не у его родителя (прототипа)

// const logger = {
//   keys(withText = true) {
//     if (withText) {
//       console.log("Object keys: ", Object.keys(this));
//     } else {
//       console.log(Object.keys(this));
//     }
//   },

//   keysAndValues() {
//     Object.keys(this).forEach((key) => {
//       console.log("Keys: ", key);
//       console.log("Values: ", this[key]);
//     });
//   },
// };

// logger.keys();
// logger.keysAndValues();

// Чтобы связать this с объектом:
// 1 вариант - надо вызывать
// const bindFunc = logger.keys.bind(person);
// bindFunc();
// logger.keys.bind(person)(true);
// // 2 вариант - не надо вызывать
// logger.keys.call(person, false);
// logger.keys.apply(person, [false]);

// class Human {
//   static isHuman = true;

//   humanGreet() {
//     console.log("Hello, I`m HUMAN");
//   }
// }

// class Person extends Human {
//   constructor(name, age) {
//     super();
//     this.name = name ?? "Undefined name";
//     this.age = age ?? "Undefined age";
//   }

//   sayHello() {
//     console.log("Hello, my name is", this.name);
//   }
// }

// const newPerson = new Person();
// console.log(newPerson); // typeof === object
// const person1 = new Person("Jhon", 30);
// const person2 = new Person("Lol", 22);
// person1.sayHello();
// person2.sayHello();
// console.log(person1.isHuman);
// console.log(Person.isHuman);
// person2.humanGreet();
// console.log(person2);
