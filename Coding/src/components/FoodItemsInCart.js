import { Img_url } from "../constants"

const FoodItemsInCart = ({ name, cloudinaryImageId, price, description }) => {

    return (
        <>
            <div className="w-52 h-80 p-2 m-2 shadow-2xl">
                <img src={Img_url + cloudinaryImageId} alt="" />
                <h2 className="font-bold">{name}</h2>
                <h2>{description}</h2>
                <h2 className="font-bold">Rs {price / 100}</h2>
            </div>
        </>
    )

}

export default FoodItemsInCart;