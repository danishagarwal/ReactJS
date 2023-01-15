//This will import all the constants from the tab.
//Comments
import * as XYZ from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}

const Body = () => {
  //useState() is a hook which returns an array
  const [searchText, setsearchText] = useState("");

  //This is for maitaining the restaurantList
  const [restaurants, setrestaurants] = useState(XYZ.restaurantList);

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

        <button
          onClick={() => {
            //Need to filter data
            //Search text will be the searchbar and from restaurants we have to search
            const data = filterData(searchText, restaurants);

            //Update the restaurants with the filter data
            setrestaurants(data);
          }}
          className="search-btn"
        >
          Search
        </button>
        {/* {console.log(searchText)} */}
      </div>

      <div className="restaurantList">
        {restaurants.map((restaurantObj) => {
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
