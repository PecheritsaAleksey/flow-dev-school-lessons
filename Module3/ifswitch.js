//IF

let a = "4";

if (a > 5) {
  console.log("a > 5");
} else {
  console.log("a < 5");
}

if (a === 4) {
  console.log("Wow");
}

if (a == 4) {
  console.log("Its working");
}

console.log(Boolean([]));
console.log(Boolean([].length));
console.log(Boolean(""));

let userName = "Alex";
if (!userName) {
  console.log("Username is empty!");
}

let b = 8;

b >= 10 ? console.log("b >= 10") : console.log("b < 10");

let userRole = "admin";

// if (userRole === "superUser") {
//   console.log("superUser");
// } else if (userRole === "admin") {
//   console.log("Hello Admin");
// } else if (userRole === "user") {
//   console.log("It is just user");
// } else {
//   console.log("Who are you?");
// }

switch (userRole) {
  case "superAdmin":
    console.log("superUser");
    break;
  case "admin":
    console.log("Hello Admin");
    break;
  case "user":
    console.log("It is just user");
    break;
  default:
    console.log("Who are you?");
    break;
}
