//BIND

function isUser() {
  return Boolean(this.name && this.age);
}

let user = {
  name: "Alex",
  age: 30,
};

let fakeUser = {
  myName: "John",
  age: 40,
};

let isFirstUSer = isUser.bind(user);

console.log(isFirstUSer());

console.log(isUser.bind(fakeUser)());

function calculateSallary(bonus, perHour, hours) {
  return bonus * perHour * hours;
}

console.log(calculateSallary(1.3, 15, 130));

function calculateBaseSallary(perHour, hour) {
  return calculateSallary(1, perHour, hour);
}

let calculateBaseSallaryWithBind = calculateSallary.bind(null, 1);

console.log(calculateBaseSallaryWithBind(10, 120));

console.log("-----------APPLY------------");

let user2 = {
  name: "Alex",
  age: 30,
};

let fakeUser2 = {
  myName: "John",
  age: 40,
};

console.log(isUser.apply(user2));
console.log(isUser.apply(fakeUser2));

let mySallary = calculateSallary.apply(null, [1.2, 15, 80]);
console.log(mySallary);

console.log("-----------CALL------------");

let mySallary2 = calculateSallary.call(null, 1.2, 20, 110);
console.log(mySallary2);

let obj = {
  0: 2,
  1: "ASD",
  2: 5,
  length: 3,
};

// console.log([1, 2, 3, 4].join(", "));

let result = [].join.apply(obj, [" - "]);
console.log(result);
