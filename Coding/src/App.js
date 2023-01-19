import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<AppLayout />);

//Config Driven UI

//Suppose we have carousel, then list of restaurant, then offers
// If in mumbai we have something else than 50% then that will be rendered with the help of backend.

// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offerName: "50%",
//       },
//       {
//         offerName: "No Delievery",
//       },
//     ],
//   },

//   {
//     type: "restaurants",
//     cards: [
//       {
//         image:
//           "https://b.zmtcdn.com/data/pictures/chains/1/49781/ee586b2cda6facecb181cb3850d474ed_featured_v2.jpg",
//         name: "Burger King",
//         cuisines: ["Burgers", "American"],
//         rating: "4.2",
//       },

//       {
//         image: "",
//         name: "KFC",
//         cuisines: ["Chicken"],
//         rating: "4.1",
//       },
//     ],
//   },
// ];

//Creating a JS Object and rendering the same restaurant card

// data? is optional chaining
//props is the parameter
//Pass in arguments, recieve parameters
//Destructuring props -> restaurant
//Destructung restaurant

// ... spread operator, it takes all the name, cuisines, avRating from data
// hence we don't have to pass different props each time like
// <RestaurantCard name={restaurantList[1].data.name} cuisines= {restaurantList[1].data.cuisines}
