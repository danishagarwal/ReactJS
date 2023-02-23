import { json, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Img_url } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  //To read a dynamic URL
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  //Dispatch an action
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const handleAddItem = () => {
    dispatch(addItem("Bleh"));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      {console.log(restaurant.menu)}
      <div className="container">
        <div className="flex justify-center items-center p-5">
          <img
            className="w-[254px] h-[165px] "
            src={Img_url + restaurant.cloudinaryImageId}
            alt=""
          />
          <ul>
            <div className="px-5">
              <h1 className="text-3xl">{restaurant.name}</h1>
              <h3 className="py-2">{restaurant.area}</h3>
              <h3 className="py-2">{restaurant.city}</h3>
              <h3 className="py-2">{restaurant.avgRating}*</h3>
            </div>
          </ul>
        </div>
        <div>
          {/* <button onClick={() => handleAddItem()}>Add Item</button> */}
        </div>

        <div className="">
          <h1 className="text-4xl font-bold">Menu</h1>
          <div className="p-2 text-center">
            <ul>
              {Object.values(restaurant?.menu?.items).map((item) => (
                <div className="flex p-2 mt-5 px-3 items-center text-sm font-semibold pb-2.5  ">
                  <img
                    className="w-[200px] h-[100px]"
                    src={Img_url + item.cloudinaryImageId}
                  />
                  <div className="flex justify-center items-center">
                    <li className="p-2 px-5" key={item.id}>
                      {item.name}
                      <p className="w-10 font-thin text-sm">
                        {"₹ " + item.price / 100}
                      </p>
                    </li>
                    <button
                      onClick={() => addFoodItem(item)}
                      className="p-1 bg-green-50 rounded-lg"
                    >
                      Add Item
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
