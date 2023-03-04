import { userCardClicker } from "./module.js";

let dynamicDiv = document.getElementById("dynamic");

let users = [
  { name: "Alex", age: 29 },
  { name: "John", age: 32 },
  { name: "Bob", age: 45 },
  { name: "Artur", age: 22 },
];

// let result = [];
// for (const user of users) {
//     result.push()
// }

let userElements = users.map((user) => {
  //   let name = user.name;
  let { name, age } = user;

  let userCard = document.createElement("div");
  userCard.className = "card";
  userCard.innerText = `${name} ${age}`;
  userCard.onclick = userCardClicker;
  return userCard;
});

// console.log(userElements);

// dynamicDiv.append(userElements[0], userElements[1]);

// dynamicDiv.append.apply(dynamicDiv, userElements);

dynamicDiv.append(...userElements);

// console.log(...userElements);
