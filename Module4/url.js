import userData from "./users.json" assert { type: "json" };

const userDiv = document.getElementById("user");

console.log(location.search);

const params = new URLSearchParams(location.search);

console.log(params);

const userId = params.get("userId");

console.log(userId);

const currentUser = userData.users.find((user) => {
  return user.id === Number(userId);
});

console.log(currentUser);

if (currentUser) {
  const { name, age } = currentUser;
  let userCard = document.createElement("div");
  userCard.className = "card";
  userCard.innerText = name + " " + age;
  userDiv.append(userCard);
}
