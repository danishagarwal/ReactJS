import { json, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Img_url } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  //To read a dynamic URL
  const { id } = useParams();

  const restaurant = useRestaurant(id);

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
