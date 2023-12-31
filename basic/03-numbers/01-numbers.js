// const int = 99;
// console.log(int); // 99
// console.log(typeof int); // number

// const float = 99.999;
// console.log(float); // 99.999
// console.log(typeof float); // number

// const pow = 10e3;
// console.log(pow); // 10000
// console.log(typeof pow); // number

// const big = 1_000_000_000;
// console.log(big); // 1000000000
// console.log(typeof big); // number
//

// console.dir(Number); // показывает объект
// console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991 - максимальное число
// console.log(23 / 0); // Infinity
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(42)); // true
// console.log(23 / undefined); // NaN
// console.log(Number.isNaN(23 / undefined)); // true
//

// const strInt = "42";
// const strFloat = "42.42";
// console.log(Number(strInt)); // 42
// console.log(Number(strFloat)); // 42.42
// console.log(parseInt(strInt)); // 42
// console.log(parseInt(strFloat)); // 42
// console.log(parseFloat(strInt)); // 42
// console.log(parseFloat(strFloat)); // 42.42
// console.log(+strInt); // 42
// console.log(+strFloat); // 42.42
//

// console.log(0.1); // 0.1
// console.log(0.2); // 0.2
// console.log(0.1 + 0.2); // 0.30000000000000004
// const a = 0.1,
//   b = 0.2;
// console.log(a + b); // 0.30000000000000004
//

// console.log((0.1 + 0.2).toFixed(1)); // 0.3, return "string"
// console.log((0.1 + 0.2).toFixed(15)); // 0.300000000000000, return "string"
// console.log(+(0.1 + 0.2).toFixed(1)); // 0.3, return "number"
// console.log(parseFloat((0.1 + 0.2).toFixed(1))); // 0.3, return "number"
//

// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER + 20); // 9007199254741012 -> считает уже не верно
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 20); // cannot mix BigInt and other types
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + BigInt(20)); // 9007199254741011n
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 20n); // 9007199254741011n
// console.log(5n + 1n); // 6n
// console.log(5n / 2n); // 2n
// console.log(parseInt(10n) - 4); // 6
//

// console.log(Math.E); // 2.718281828459045
// console.log(typeof Math.E); // number
// console.log(Math.PI); // 3.141592653589793
// console.log(typeof Math.PI); // number

// console.log(Math.sqrt(25)); // 5
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.abs(-233)); // 233
// console.log(Math.min(-8, 2, -4, 5, 0)); // -8
// console.log(Math.max(-8, 2, -4, 5, 0)); // 5

// console.log(Math.floor(4.1)); // 4
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.9)); // 5
// console.log(Math.round(4.1)); // 4
// console.log(Math.round(4.9)); // 5
// console.log(Math.trunc(4.1)); // 4
// console.log(Math.trunc(4.9)); // 4

// console.log(Math.random()); // random number from [0; 1)
