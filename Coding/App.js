import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <React.Fragment>
      <img
        className="image"
        alt="image"
        src="https://upload.wikimedia.org/wikipedia/commons/1/15/Food_Town_Webster.jpg"></img>
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

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src="https://b.zmtcdn.com/data/pictures/chains/1/49781/ee586b2cda6facecb181cb3850d474ed_featured_v2.jpg"
        alt="burgerKing"
      />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};

const Body = () => {
  return <RestaurantCard></RestaurantCard>;
};

const Footer = () => {};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body></Body>
    </>
  );
};

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<AppLayout />);
