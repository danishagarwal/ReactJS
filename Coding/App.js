import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <React.Fragment>
      <img className="image" alt="image" src="https://upload.wikimedia.org/wikipedia/commons/1/15/Food_Town_Webster.jpg"></img>

      <h1 id="Title" key="h1">
        Dan's Food Town
      </h1>
    </React.Fragment>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const BodyComponent = () => { };

const AppLayout = () => { };

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<HeaderComponent />);
