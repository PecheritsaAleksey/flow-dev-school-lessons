console.log(document);
console.log(document.body);
console.log(document.documentElement);

// document.body.style.backgroundColor ="red"

//firstChild, lastChild, childNodes, firstElementChild, lastElementChild

console.log(document.body.childNodes);
console.log(document.body.children);

console.log(document.body.children[0]);

console.log(document.body.children[0].children);
console.log(document.body.children[0].lastElementChild);

// console.log(Array.from(document.body.children).forEach);

console.log("---------------------------");

for (const element of document.body.children[0].children) {
  console.log(element);
}

console.log("---------------------------");

Array.from(document.body.children[0].children).forEach((element) =>
  console.log(element)
);

//parentElement
//nextSibling, previousSibling, nextElementSibling, previousElementSibling,

console.log("---------------------------");

Array.from(document.body.children[0].children).forEach((element) =>
  //   console.log(element.parentElement)
  console.log(element.nextElementSibling)
);

//getElementById, querySelector

console.log("---------------------------");

console.log(document.getElementById("card4"));
console.log(document.querySelector(".card"));

//querySelectorAll, getElementsByName, getElementsByTagName, getElementsByClassName

console.log("---------------------------");

console.log(document.querySelectorAll(".card"));
console.log(document.getElementsByTagName("script"));

console.log("---------------------------");

console.log(document.getElementsByTagName("input")[0].value);
console.log(document.getElementById("card4").innerHTML);
console.log(document.getElementById("card4").id);
// console.log(document.getElementById("card4").myAttribute);

console.log(document.getElementById("card4").getAttribute("myAttribute"));

console.log("---------------------------");

console.log(document.getElementById("card4").getAttribute("data-mydata"));
console.log(document.getElementById("card4").dataset);
console.log(document.getElementById("card4").dataset.mydata);

