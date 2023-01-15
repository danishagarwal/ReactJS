//This will import all the constants from the tab.
import * as XYZ from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //useState() is a hook which returns an array
  const [searchText, setsearchText] = useState("");

  const [searchClicked, setsearchClicked] = useState("False");
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

        {/* Toggle button which makes true -> False -> True */}
        {/* React is very fast it will only re-render the thing which is changing because Virtual DOM /Diff Algorithm */}

        <h1>{searchClicked}</h1>
        <button
          onClick={() => {
            if (searchClicked == "False") {
              setsearchClicked("True");
            } else {
              setsearchClicked("False");
            }
          }}
          className="search-btn"
        >
          Search
        </button>
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
