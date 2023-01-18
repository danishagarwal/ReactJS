//This will import all the constants from the tab.
import * as XYZ from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    //Converting data into json readable format
    const json = await data.json();
    console.log(json);
    setrestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log(":render");
  return (
    <>
      <div className="search">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
        {/* onChange this function setsearchText will be called, and it's a callback function which takes 'e' */}

        <button
          onClick={() => {
            const data = filterData(searchText, restaurants); //Need to filter data - //Search text will be the searchbar and from restaurants we have to search

            setrestaurants(data); //Update the restaurants with the filter data
          }}
          className="search-btn"
        >
          Search
        </button>
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
