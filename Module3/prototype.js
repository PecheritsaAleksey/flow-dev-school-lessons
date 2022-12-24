let user = {
  name: "John",
  sayHi: function () {
    console.log("Hi! I am", this.name);
  },
};

console.log(user);

let admin = {
  name: "Bob",
  sayAdmin: function () {
    console.log("I am Admin");
  },
};

console.log(admin);

admin.sayAdmin();

// console.log(admin.toString());

// admin.__proto__ = user;

Object.setPrototypeOf(admin, user);

admin.sayHi();

console.log(admin);

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log("Hi! I am", this.name);
};

let user1 = new User("Mike");
let user2 = new User("Alex");

user1.sayHi();
user2.sayHi();

console.log(user1);

function Admin(name) {
  User.call(this, name);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.sayAdmin = function () {
  console.log("I am Admin");
};

let user3 = new Admin("Artur");
console.log(user3);

user3.sayHi();
