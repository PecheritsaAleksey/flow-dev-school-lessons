let goLastBtn = document.getElementById("gotolast");
let goTopBtn = document.getElementById("gotop");
let lastCard =
  document.querySelectorAll(".card")[
    document.querySelectorAll(".card").length - 1
  ];

console.log(goLastBtn);
console.log(lastCard);

goLastBtn.addEventListener("click", () => {
  lastCard.scrollIntoView({ behavior: "smooth" });
});

goTopBtn.addEventListener("click", () => {
  //   window.scrollTo(0, 0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
