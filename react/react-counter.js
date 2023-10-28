const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Counter"),
    React.createElement("h2", null, `Counter is ${counter}`),
    React.createElement(
      "button",
      {
        onClick: () => setCounter((prev) => prev + 1),
      },
      `Make counter ${counter + 1}`
    )
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(Counter));
