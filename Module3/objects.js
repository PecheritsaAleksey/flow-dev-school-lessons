// let user = Object();
// let user = {};

let user = {
  name: "Alex",
  age: 27,
};

console.log(user);

user.job = "Programmer";

console.log(user);

delete user.age;

console.log(user);

console.log(user.name);
console.log(user["name"]);

let jobName = "job";

console.log(user[jobName]);

// let a = 5;
// let b = a;

// console.log(a);
// console.log(b);

// b = 7;

// console.log(a);
// console.log(b);

let user1 = { name: "John" };
let user2 = user1;

console.log(user1);
console.log(user2);

user2.name = "Bob";

console.log(user1);
console.log(user2);

let user3 = { name: "Alex" };
// let user4 = Object.assign({}, user3);
let user4 = { ...user3 };

console.log(user3);
console.log(user4);

user4.name = "Mike";

console.log(user3);
console.log(user4);

console.log("_----------------------_");

let superUser = {
  name: "Kevin",
  sayHi: function () {
    //this
    console.log(`Hi! I am ${this.name}`);
  },
};

superUser.sayHi();

let superUser2 = { ...superUser };
superUser2.name = "Artur";
superUser2.sayHi();

console.log("_----------------------_");

function User(name, job) {
  this.name = name;
  this.job = job;
}

let newUser = new User("Alex", 27);

console.log(newUser);
