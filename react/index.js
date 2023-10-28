let counter = 2;

const counterIsText = document.getElementsByTagName("h2")[0];
const button = document.getElementsByTagName("button")[0];

const updateHTML = () => {
  counterIsText.innerText = `Counter is ${counter}`;
  button.innerText = `Make counter ${counter + 1}`;
};

const increment = () => {
  counter++;
  updateHTML();
};

button.addEventListener("click", increment);

updateHTML();
