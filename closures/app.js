let a = 10;

function globalF1() {
  console.log(`global a = ${a}`);
}

// globalF1(); //  global a = 10

a = 100500;
// globalF1(); //  global a = 100500

/* 
  Происходит обращение к глобальной функции, так как внутреннего значения "а" внутри globalF1() не задано
*/

function localF2() {
  let a = 20;
  console.log(`local a = ${a}`);
}

// localF2(); // local a = 20

function globalF2() {
  a = 99;
  console.log(`a = ${a}`);
}

// globalF2(); //  a = 99;
// localF2(); //  local a = 20

/*
  в функции localF2() создается внутренняя (локальная) переменная, которую мы и выводим.
  Переменная создается, поэтому let. Если не создавать переменную, то получается, что мы переназначаем глобальную переменную которая была равна 100500.
  Обратить внимание - локальная переменная по-прежнему 20
*/

let count = 0;

// function step() {
//   count++;
//   console.log(count);
// }

// step(); //  1
// step(); //  2
// step(); //  3

/*
  Работа с внешней переменной не всегда плохо. Например выше, мы можем сделать функцию "счетчик". 
  Этого нельзя достигнуть, когда переменная внутри функции.
*/

function high() {
  let count = 0;

  function step() {
    count++;
    console.log(count);
  }
}

// const z = high();
// console.log(z); // undefined
// step(); // step is not defined

/*
  Создав функцию, в которую поместили функцию, пытаемся сделать манипуляции - особого толку нет.
  Создадим функцию правильно:
*/

function createStep(n = 0) {
  let count = n;
  return function step() {
    count++;
    console.log(count);
  };
}

// let step1 = createStep();
// console.log(step1);
// step1();
// step1();
// step1();
// let step2 = createStep(200);
// step2();
// step2();

/*
  Результатами вызовов становятся 1, 2, 3 для step1 и 201, 202 для step2.
  step1 и step2 - независимы
*/

function rundomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function createBeggar() {
  let s = 0;
  return function beggar() {
    s += rundomInteger(0, 100);
    console.log(s);
    if (s >= 250) return;
    beggar();
  };
}

const user1 = createBeggar();
// user1();

/*
  Суть функции - выдавать число от 0 до 100, и если в сумме больше 250 - то завершить функцию. Получаем разное количество шагов выполнения.
*/

let p;
