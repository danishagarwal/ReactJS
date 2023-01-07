import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLDOM
const heading2 = React.createElement(
  "h1",
  { key: "h1" },
  "Hello ReactJSS Bleh"
);

//JSX => React.createElement => Object => HTMLDOM
const h = (
  <h1
    key="test"
    id="title">
    Dan Rocks
  </h1>
);
console.log(h);
const root2 = ReactDOM.createRoot(document.getElementById("root"));

// React will override everything inside the div root {Interview question}
root2.render(h);
