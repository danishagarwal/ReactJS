//This will import all the constants from the tab.
import * as XYZ from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="restaurantList">
      {XYZ.restaurantList.map((restaurantObj) => {
        return (
          <RestaurantCard {...restaurantObj.data} key={restaurantObj.data.id} />
        );
      })}
    </div>
  );
};

export default Body;
