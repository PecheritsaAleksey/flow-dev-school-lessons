//click, mousedown, mouseup
//mouseover , mouseout
//keydown, keyup
//submit

// document.querySelector(".card").onclick = function () {
//   alert("Wow");
// };

// document.querySelector(".card").onclick = (e) => {
//     console.log(e.target);
// };

console.log(document.querySelectorAll(".card"));
document.querySelectorAll(".card").forEach((card) => {
  card.onclick = () => {
    console.log("Wow");
  };
});

console.log(document.querySelectorAll(".card"));
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    let text = e.target.innerHTML;
    console.log(`This is card with ${text}`);
  });
});

const logHey = () => {
  console.log("Hey!");
};

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseover", logHey);
});

document.querySelectorAll(".card").forEach((card) => {
  card.removeEventListener("mouseover", logHey);
});

let input = document.getElementsByTagName("input")[0];

input.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Input!");
});
