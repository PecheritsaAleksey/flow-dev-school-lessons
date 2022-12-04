let string = "Это строка!";

let number = 5;

// let bigInt = 2 ** 53;
let bigInt = 9007199254740992n;

let trueBoolean = true;
let falseBoolean = false;

let nulValue = null;

let undefinedValue = undefined;

// let a;
// console.log(a);

console.log(typeof string);
console.log(typeof number);
console.log(typeof trueBoolean);
console.log(typeof nulValue);
console.log(typeof g);

let user = { name: "Bob", age: 50 };
console.log(user);
console.log(typeof user);

console.log("__________Преобразование типов__________");

let stringNumber = "5";

let newNumber = Number(stringNumber);

console.log(newNumber);
console.log(typeof newNumber);

// let stringAgaing = String(newNumber);
let stringAgaing = newNumber.toString();

console.log(typeof stringAgaing);

console.log("five" - 4);

console.log("5" + 4);

console.log(Boolean(0));
console.log(Boolean(""));
