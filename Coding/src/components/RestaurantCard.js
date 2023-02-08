import { Img_url } from "../constants";

const RestaurantCard = ({ user, name, cloudinaryImageId, cuisines, avgRating }, props) => {
  return (
    <div className="w-52 h-72 p-2 m-2 shadow-2xl   ">
      {/* {console.log(props)} */}
      <img src={Img_url + cloudinaryImageId} alt="res" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      {/* //Props Drillin */}
      <h1>{user.name}</h1>
      <h4>Avg Rating {avgRating} </h4>

    </div>
  );
};

export default RestaurantCard;
