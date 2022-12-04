// console.log("Hi!");

function myLog() {
  console.log("Hey!");
  console.log("From function!");
}

myLog();

function greeting(name = "mister") {
  console.log("Hello,", name);
}

greeting("Alex");
greeting("Bob");
greeting("John");
greeting();

//Стрелочные функции
const myltiplyTwo = (num) => {
  // console.log(num * 2);
  let result = num * 2;
  return result;
};

let myVar = myltiplyTwo(8);

console.log(myVar);

const multiplyThree = (num) => {
  num * 3;
};

console.log(multiplyThree(5));
