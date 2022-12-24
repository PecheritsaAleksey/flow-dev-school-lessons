// function User(name) {
//     this.name = name;
//   }
// User.prototype.sayHi = function () {
//     console.log("Hi! I am", this.name);
//   };

//   let user1 = new User("Mike");
//   let user2 = new User("Alex");

//   user1.sayHi();
//   user2.sayHi();

//   console.log(user1);

//   function Admin(name) {
//     User.call(this, name);
//   }

//   Admin.prototype = Object.create(User.prototype);

//   Admin.prototype.sayAdmin = function () {
//     console.log("I am Admin");
//   };

//   let user3 = new Admin("Artur");
//   console.log(user3);

//   user3.sayHi();

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi = function () {
    console.log("Hi! I am", this.name);
  };
}

let user1 = new User("Alex");

console.log(user1);

class Admin extends User {
  constructor(name) {
    super(name);
  }
}

let user2 = new Admin("Bob");
user2.sayHi();
