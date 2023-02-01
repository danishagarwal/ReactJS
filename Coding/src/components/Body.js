//This will import all the constants from the tab.
import * as XYZ from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const [restaurants, setrestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(XYZ.All_Restaurants);

    const json = await data.json();
    console.log("useEffect");
    setrestaurants(json?.data?.cards[2]?.data?.data?.cards);

    //When no filter is provided initially our data will be allRestaurants
    setfilteredrestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  console.log(!isOnline);

  if (!isOnline) {
    return <h1> 🔴 Offline! Please check your internet connection</h1>;
  }

  if (!restaurants) return null;
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
            <Link
              to={"/restaurant/" + restaurantObj.data.id}
              key={restaurantObj.data.id}
            >
              <RestaurantCard
                {...restaurantObj.data}
                key={restaurantObj.data.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
