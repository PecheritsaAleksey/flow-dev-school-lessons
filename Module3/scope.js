let myVar = "Hi!";

if (true) {
  let newVar = "Hello";
}

console.log(myVar);
// console.log(newVar);

let result = 0;

for (let i = 0; i < 5; i++) {
  let result = i * 2;
  console.log(result);
  console.log(myVar);
}

console.log(result);

function myFunc() {
  let a = 1;
  console.log(a);
  console.log(myVar);

  if (true) {
    let a = 2;
    console.log(a);
  }
}

myFunc();

function createFunction() {
  let scope = "Create Function";

  function innerFunction() {
    console.log(scope);
  }

  return innerFunction;
}

let newFunc = createFunction();

newFunc();