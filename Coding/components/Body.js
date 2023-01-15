//This will import all the constants from the tab.
import * as XYZ from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //useState() is a hook which returns an array
  const [searchText, setsearchText] = useState("");

  return (
    <>
      <div className="search">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchText}
          // onChange this function setsearchText will be called, and it's a callback function which takes 'e'
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button className="search-btn">Search</button>
        {/* {console.log(searchText)} */}
      </div>

      <div className="restaurantList">
        {XYZ.restaurantList.map((restaurantObj) => {
          return (
            <RestaurantCard
              {...restaurantObj.data}
              key={restaurantObj.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
