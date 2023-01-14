import { Img_url } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      {/* {console.log(props)} */}
      <img src={Img_url + cloudinaryImageId} alt="res" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
