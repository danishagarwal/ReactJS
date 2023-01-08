import React from "react";
import ReactDOM from "react-dom/client";

//JSX => React.createElement => Object => HTMLDOM
const Hola = () => (
  <h1
    key="test"
    id="title">
    Dan Rocks
  </h1>
);

//Nested Header element with React.createElement
const headingg = React.createElement("div", {}, [
  React.createElement("h1", { key: "h1" }, "This is h11"),
  React.createElement("h2", { key: "h2" }, "This is h22"),
]);

//Using JSX
const Head1 = () => {
  return (
    <div>
      {<Hola></Hola>} {/* Component composition */}
      <h1
        title="hoy"
        id="test">
        Hey H1
      </h1>
      <h2>Hey H2</h2>
    </div>
  );
};

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(Head1());
