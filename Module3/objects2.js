"use strict";

let user = {};

user.id = 1;

console.log(user);

user.id = 2;

console.log(user);

console.log(Object.getOwnPropertyDescriptor(user, "id"));

let betterUser = {};
Object.defineProperty(betterUser, "id", {
  writable: false,
  value: 3,
});

console.log(betterUser);

// betterUser.id = 4;

// console.log(betterUser);

let cleverUser = {
  firstName: "Artur",
  lastName: "Morgan",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    let newFirstName = name.split(" ")[0];
    let newLastName = name.split(" ")[1];

    this.firstName = newFirstName;
    this.lastName = newLastName;
  },
};

console.log(cleverUser);

cleverUser.fullName = "Alex Johnson"

console.log(cleverUser);

