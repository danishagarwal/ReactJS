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
      <div className="container">
        <div className="flex justify-center items-center p-5">
          <img className="w-[254px] h-[165px] " src={Img_url + restaurant.cloudinaryImageId} alt="" />
          <ul>
            <div className="px-5">
              <h1 className="text-3xl " >{restaurant.name}</h1>
              <h3 className="py-2">{restaurant.area}</h3>
              <h3 className="py-2">{restaurant.city}</h3>
              <h3 className="py-2">{restaurant.avgRating}*</h3>
            </div>
          </ul>
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
