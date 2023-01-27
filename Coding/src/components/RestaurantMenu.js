import { json, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Img_url } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //To read a dynamic URL
  const params = useParams();
  const { id } = params;
  console.log(params);

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div>
          <h1>{restaurant.name}</h1>
          <img src={Img_url + restaurant.cloudinaryImageId} alt="" />
          <h3>{restaurant.area}</h3>
          <h3>{restaurant.city}</h3>
          <h3>{restaurant.avgRating} *</h3>
        </div>

        <div>
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
