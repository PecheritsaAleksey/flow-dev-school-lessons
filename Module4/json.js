import userData from "./users.json" assert { type: "json" };

let dynamicDiv = document.getElementById("dynamic");

let userElements = userData.users.map((user) => {
  //   let name = user.name;
  let { name, age } = user;

  let userCard = document.createElement("div");
  userCard.className = "card";
  userCard.innerText = `${name} ${age}`;
  return userCard;
});

dynamicDiv.append(...userElements);
