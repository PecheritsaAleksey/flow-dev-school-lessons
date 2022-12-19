//WHILE

// while(smt){
//     do smth
// }

let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}

console.log("-------------------------------------");

//FOR

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("-------------------------------------");

let arr = ["John", "Alex", "Bob", "Artur"];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(index, element);
}

console.log("-------------------------------------");

for (const name of arr) {
  console.log(name);
}

console.log("-------------------------------------");

let obj = {
  name: "Bob",
  age: 29,
  job: "Developer",
};

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

for (const key in arr) {
  console.log(key);
}
