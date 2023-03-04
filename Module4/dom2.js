let newCard = document.createElement("div");
newCard.className = "card";
newCard.innerText = "6";

let container = document.querySelector(".container");

container.append(newCard);

// container.prepend(newCard);

// container.before(newCard)

// container.after(newCard)

// container.replaceWith(newCard)

container.insertAdjacentHTML("beforeend", "<div class='card'>7</div>");
container.insertAdjacentHTML("afterbegin", "<div class='card'>0</div>");

// container.insertAdjacentHTML("beforebegin", "<div class='card'>0</div>");
// container.insertAdjacentHTML("afterend", "<div class='card'>0</div>");

let lastCard = container.lastElementChild;
lastCard.remove();

newCard.classList.add("warning");
// newCard.classList.remove("card");

newCard.innerText = "678";

document.getElementsByTagName("input")[0].value = "goodbye";

document.getElementById("card4").dataset.mydata = "123";
document.getElementById("card4").setAttribute("myattribute", "777");
