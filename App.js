const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        React.createElement("h1", {}, "Hello from React component h1"),
        React.createElement("h2", {}, "Hello from React component h2"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement("h1", {}, "Hello from React component h1"),
        React.createElement("h2", {}, "Hello from React component h2"),
      ]
    ),
  ]
);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent);
