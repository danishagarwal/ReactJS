//This will import all the constants from the tab.
import * as XYZ from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { All_Restaurants } from "../constants";
const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const [restaurants, setrestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(All_Restaurants);

      const json = await data.json();
      console.log(json);
      setrestaurants(
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      //When no filter is provided initially our data will be allRestaurants
      setfilteredrestaurants(
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  }

  const isOnline = useOnline();
  console.log(!isOnline);

  if (!isOnline) {
    return <h1> 🔴 Offline! Please check your internet connection</h1>;
  }

  if (!restaurants) return null;
  console.log(restaurants?.length);
  return restaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex p-2 justify-center">
        <input
          className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray"
          placeholder="Search"
          type="text"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button
          className="btn btn--primary basis-[60px] mob:text-xs"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            console.log(data);

            //We have to setFiltered restaurants from allrestaurants which is passed in FilterData function
            setfilteredrestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex-wrap flex text-center justify-center">
        {/* We will be displaying our filtered data on screen */}

        {filteredrestaurants.map((restaurantObj) => {
          return filteredrestaurants?.length === 0 ? (
            <h1 className="text-xl">No Restaurant found</h1>
          ) : (
            <Link
              to={"/restaurant/" + restaurantObj.info.id}
              key={restaurantObj.info.id}
            >
              <RestaurantCard
                {...restaurantObj.info}
                key={restaurantObj.info.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
