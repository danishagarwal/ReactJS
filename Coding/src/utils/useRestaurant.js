import { useEffect, useState } from "react";
import { Fetch_Menu_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(Fetch_Menu_URL + id);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }



  return restaurant;
};

export default useRestaurant;
