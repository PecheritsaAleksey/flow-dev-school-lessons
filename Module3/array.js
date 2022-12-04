let a = "A";
let b = "B";

// let array = Array();
// let array = [];
let array = [a, b];

console.log(array);

console.log(array[2]);

array[2] = "C";

console.log(array);
console.log(array.length);

array.push("D");
console.log(array);

let pop = array.pop();
console.log(array);
console.log(pop);

array.unshift("START");
console.log(array);

let shift = array.shift();
console.log(array);
console.log(shift);

array.push("D", "E", "F");
console.log(array);

array.splice(1, 3, "FROM", "SPLICE");
console.log(array);

let array2 = ["X", "Y"];

array = array.concat(array2);
console.log(array);

console.log("Index X - ", array.indexOf("X"));
