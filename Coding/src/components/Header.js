import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";

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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
            <li>
              <Link to="/contact"> Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
