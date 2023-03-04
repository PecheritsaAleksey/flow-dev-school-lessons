// console.log(fetch("https://dummyjson.com/users"));

fetch("https://dummyjson.com/users").then((res) => res.json());
//   .then((data) => console.log(data));

fetch("https://dummyjson.com/users/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    firstName: "Muhammad",
    lastName: "Ovi",
    age: 250,
    /* other user data */
  }),
}).then((res) => res.json());
//   .then(console.log);

function addUsers(users) {
  const dynamicDiv = document.getElementById("dynamic");

  let userElements = users.map((user) => {
    let { firstName, age } = user;

    let userCard = document.createElement("div");
    userCard.className = "card";
    userCard.innerText = `${firstName} ${age}`;
    return userCard;
  });

  dynamicDiv.innerHTML = "";
  dynamicDiv.append(...userElements);
}

let skipedUsers = 0;
async function nextUsers() {
  let data = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${skipedUsers}`
  ).then((res) => res.json());

  console.log(data);
  addUsers(data.users);
  skipedUsers += 10;
}

nextUsers();
