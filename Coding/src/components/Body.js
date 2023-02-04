//This will import all the constants from the tab.
import * as XYZ from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//Filter data from all restaurants
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const [filteredrestaurants, setfilteredrestaurants] = useState([]);

  const [restaurants, setrestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setrestaurants(json?.data?.cards[2]?.data?.data?.cards);

    //When no filter is provided initially our data will be allRestaurants
    setfilteredrestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log(":render");

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />

        <button
          onClick={() => {
            const data = filterData(searchText, restaurants);
            console.log(data);
            //We have to setFiltered restaurants from allrestaurants which is passed in FilterData function
            setfilteredrestaurants(data);
          }}
          className="search-btn"
        >
          Search
        </button>
      </div>

      <div className="restaurantList">
        {/* We will be displaying our filtered data on screen */}

        {filteredrestaurants.map((restaurantObj) => {
          return filteredrestaurants?.length === 0 ? (
            <h1>No Restaurant found</h1>
          ) : (
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
