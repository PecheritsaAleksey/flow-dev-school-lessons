// forEach, map, some, filter, reduce, find

let arr = [2, 5, 6, 8, 9, 4, 3, 1];

arr.forEach((element, index, thisArr) => {
  //   console.log(index, element);
  //   console.log(thisArr);

  console.log(element * 2);
});

//CALLBACK

console.log("-----------------------");

//MAP

let newArr = arr.map((el) => el * 2);

console.log(newArr);

console.log("-----------------------");

// SOME

let have9 = arr.some((el) => {
  return el === 9;
});

console.log(have9);

console.log("-----------------------");

//FIND

let moreThan8 = arr.find((el) => {
  return el > 8;
});

console.log(moreThan8);

console.log("-----------------------");

//Filter

let allMoreThen5 = arr.filter((el) => el > 5);
console.log(allMoreThen5);

let onlyOdd = arr.filter((el) => {
  if (el % 2 === 0) return el;
});

console.log(onlyOdd);

//REDUCE
let arr2 = [1, 2, 3, 4, 5];
let sum = arr2.reduce((prev, current) => {
  return prev + current;
}, 0);

console.log(sum);

//1 - 0 + 1 = 1
//2 - 1 + 2 = 3
//3 - 3 + 3 = 6
//4 - 6 + 4 = 10
//5 - 10 + 5 = 15
