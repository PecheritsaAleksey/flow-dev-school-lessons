console.log(this);
// {

//     a: 1
//     b: 2

// }

a = 5;

console.log(this.a);

function myFunc() {
  console.log(this);
}

myFunc();

let user = {
  name: "Alex",
  greetings: function () {
    console.log(this);
  },
};

user.greetings();

let user2 = {
  name: "Bob",
  greetings: function () {
    console.log(this);
  },
  address: {
    street: "Lenina",
    getAddress: function () {
      console.log(`Street is ${this.street}`);
    },
  },
};

user2.greetings();
user2.address.getAddress();

let User = function (name) {
  this.name = name;
};

let user3 = new User("John");
console.log(user3);

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName();

user3.getName = sayMyName;

user3.getName();

let crazyObject = {
  info: "I am object",
  bigFunc: function () {
    let $this = this;
    console.log("Big func this is -", $this);

    function internal() {
      console.log("internal func this is -", $this);
    }

    internal();
  },
};

crazyObject.bigFunc();

const saySmth = () => {
  console.log(this);
};

saySmth();
user2.saySmth = saySmth;
user2.saySmth();

let crazyObject2 = {
  info: "I am object",
  bigFunc: function () {
    console.log("Big func 2 this is -", this);

    let internal = () => {
      console.log("internal func  2 this is -", this);
    };

    internal();
  },
};

crazyObject2.bigFunc();
