import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => {
  return (
    <React.Fragment>
      <img className="h-28 px-2 py-2" alt="image" src={Logo}></img>

      <h1
        className="font-semibold text-3xl text-center py-10"
        id="Title"
        key="h1"
      >
        Dan's Food Town
      </h1>
    </React.Fragment>
  );
};

const HeaderComponent = () => {

  //Using the created context
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="flex justify-between shadow-lg bg-slate-300">

        <Title />

        <div className="nav-items">
          <ul className="flex py-10">
            {/* Using userContext */}
            {/* <h1 className="font-semibold text-green-500 px-10">Hi {user.name}</h1> */}
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/contact"> Contact</Link>
            </li>
            <li className="px-2">
              <Link to="/faq"> FAQ</Link>
            </li>
            <li className="px-2">
              <Link to="/contact"> Cart</Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
