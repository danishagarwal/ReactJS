import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "../assets/img/logo.jpg";

const Title = () => {
  return (
    <React.Fragment>
      <img className="image" alt="image" src={Logo}></img>
      <h1 id="Title" key="h1">
        Dan's Food Town
      </h1>
    </React.Fragment>
  );
};

const HeaderComponent = () => {
  return (
    <>
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
    </>
  );
};

export default HeaderComponent;
